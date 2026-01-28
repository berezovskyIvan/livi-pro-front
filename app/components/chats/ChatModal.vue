<template>
  <ui-modal>
    <div class="chat-modal__wrapper">
      <header class="chat-modal__header">
        <icon name="icon:chat" class="chat-modal__chat-icon" />
        <h2 class="chat-modal__title">Диалог с {{ userName }}</h2>
      </header>

      <div class="chat-modal__messages-wrapper" ref="messagesWrapper">
        <div
          v-for="item in messages"
          :key="item.id"
          :class="[
            'chat-modal__message',
            { 'chat-modal__message_client': isClient(item.senderRole) },
            { 'chat-modal__message_clinic': isClinic(item.senderRole) },
          ]"
        >
          <div v-if="isClient(item.senderRole)" class="chat-modal__message-icon-wrapper">
            <icon name="icon:user" class="chat-modal__message-icon chat-modal__message-icon_user" />
          </div>

          <div v-if="item.bodyMain" class="chat-modal__message-text" v-html="getRenderedBody(item.bodyMain)" />

          <span class="chat-modal__message-created-at">{{ formatDate(item.createdAt) }}</span>

          <div v-if="isClinic(item.senderRole)" class="chat-modal__message-icon-wrapper">
            <icon name="icon:bot" class="chat-modal__message-icon chat-modal__message-icon_bot" />
          </div>
        </div>
      </div>
    </div>
  </ui-modal>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';

import type { ApiMessageResponse } from '#shared/api/messages/types';

import { formatDate } from 'business-modules/systemic/utils/format-date';
import { getInstrumentalCaseUserName } from 'business-modules/user/utils/get-instrumental-case-user-name';

const md = new MarkdownIt();

const props = defineProps<{
  messages: ApiMessageResponse[] | undefined;
}>();

const messagesWrapper = ref<HTMLDivElement | null>(null);

const isClient = (senderRole: ApiMessageResponse['senderRole']): boolean => {
  return senderRole === 'client' || senderRole === 'user';
};
const isClinic = (senderRole: ApiMessageResponse['senderRole']): boolean => {
  return senderRole === 'clinic' || senderRole === 'assistant';
};

const getRenderedBody = (body: ApiMessageResponse['bodyMain']) => {
  if (body) {
    return md.render(body);
  }
  return undefined;
};

const userName = computed<string>(() => {
  const user = props.messages?.find(message => message.user)?.user;
  return getInstrumentalCaseUserName(user?.firstName, user?.middleName, user?.lastName);
});

onMounted(() => {
  if (messagesWrapper.value) {
    messagesWrapper.value.scrollTo(0, messagesWrapper.value.scrollHeight);
  }
});
</script>

<style scoped lang="scss">
$chat-icon-size: 20px;
$user-icon-wrapper-size: 32px;
$user-icon-size: 16px;

.chat-modal {
  &__wrapper {
    width: 768px;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &__chat-icon {
    width: $chat-icon-size;
    height: $chat-icon-size;
    margin-right: 8px;
  }

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.45px;
  }

  &__messages-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 400px;
    padding-right: 8px;

    &::-webkit-scrollbar {
      width: 8px;

      &-thumb {
        background-color: $border-gray;
        border-radius: 4px;
      }
    }
  }

  &__message {
    display: grid;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &-icon-wrapper {
      grid-area: icon-wrapper;
      display: flex;
      align-items: center;
      justify-content: center;
      width: $user-icon-wrapper-size;
      height: $user-icon-wrapper-size;
      border-radius: 50%;
    }

    &-text {
      grid-area: text;
      display: block;
      white-space: break-spaces;
      border-radius: 12px;
      font-size: 16px;
      line-height: 24px;
      padding: 8px 16px;
      max-width: 500px;
      margin-bottom: 4px;
    }

    &_client {
      justify-content: flex-start;
      grid-template:
        "icon-wrapper text"
        "icon-wrapper created-at";

      .chat-modal__message {
        &-text {
          background-color: $gray-light-6;
          color: $gray-full-dark-3;
        }

        &-icon-wrapper {
          background-color: $gray-light-6;
          margin-right: 8px;
        }
      }
    }

    &_clinic {
      justify-content: flex-end;
      grid-template:
        "text icon-wrapper"
        "created-at icon-wrapper ";

      .chat-modal__message {
        &-text {
          background-color: $mars-green;
          color: $white;
        }

        &-icon-wrapper {
          background-color: $gray-light-7;
          margin-left: 8px;
        }
      }
    }

    &-icon {
      width: $user-icon-size;
      height: $user-icon-size;

      &_user {
        color: $gray-full-dark-3;
      }

      &_bot {
        color: $mars-green;
      }
    }

    &-created-at {
      grid-area: created-at;
      color: $gray-light;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
