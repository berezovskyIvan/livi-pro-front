<template>
  <div class="chats-page">
    <h1 class="chats-page__title">Чаты</h1>
    <p class="chats-page__description">Переписки с пациентами из всех подключенных мессенджеров</p>
    <chats-content class="chats-page__content" />
    <chat-list />
  </div>
</template>

<script setup lang="ts">
import ChatList from 'components/chats/ChatList.vue';
import ChatsContent from 'components/chats/ChatsContent.vue';

import { useDialogsStore } from '#imports';

const dialogsStore = useDialogsStore();

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
});

await callOnce('dialogs-list', async () => {
  await dialogsStore.list({ page: 1, perPage: 12 });
});
</script>

<style scoped lang="scss">
.chats-page {
  width: 100%;
  padding: 24px;

  &__title {
    letter-spacing: -0.75px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: $gray-full-dark-3;
  }

  &__description {
    color: $gray-light;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }

  &__content {
    margin-bottom: 24px;
  }
}
</style>
