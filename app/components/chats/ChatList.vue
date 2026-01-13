<template>
  <div class="chats-list">
    <h3 class="chats-list__title">Активные диалоги</h3>
    <p class="chats-list__description">Недавние переписки с пациентами</p>

    <chat-card
      v-for="item in dialogItems"
      :key="item.id"
      class="chats-list__item"
      :dialog="item"
      @click="openDialogModal(item.id)"
    />

    <ui-button
      v-if="showLoadMoreDialogsButton"
      title="Загрузить ещё"
      class="chats-list__load-more-dialog-button"
      :loading="loadDialogsButtonLoading"
      @click="loadMoreDialogs"
    />

    <chat-modal v-if="showChatModal" :messages @close="closeChatModal" />
  </div>
</template>

<script setup lang="ts">
import ChatCard from 'components/chats/ChatCard.vue';
import ChatModal from 'components/chats/ChatModal.vue';

import type { ApiDialogsListResponse } from '#shared/api/dialogs/types';
import type { ApiMessageResponse } from '#shared/api/messages/types';

import { useDialogsStore, useMessagesStore } from '#imports';

const dialogsStore = useDialogsStore();
const messagesStore = useMessagesStore();

const showChatModal = ref<boolean>(false);
const messages = ref<ApiMessageResponse[] | undefined>(undefined);
const loadDialogsButtonLoading = ref<boolean>(false);

const dialogItems = computed<ApiDialogsListResponse['items'] | undefined>(() => dialogsStore.items);
const dialogsCurrentPage = computed<ApiDialogsListResponse['currentPage']>(() => dialogsStore.currentPage ?? 0);
const dialogsTotalPages = computed<ApiDialogsListResponse['totalPages']>(() => dialogsStore.totalPages ?? 0);

const showLoadMoreDialogsButton = computed<boolean>(() => {
  return dialogsCurrentPage.value < dialogsTotalPages.value;
});

const loadMoreDialogs = () => {
  loadDialogsButtonLoading.value = true;
  dialogsStore.list({ page: dialogsCurrentPage.value + 1, perPage: 12 }).finally(() => {
    loadDialogsButtonLoading.value = false;
  });
};

const openDialogModal = async (dialogId: string) => {
  const res = await messagesStore.listByDialogId(dialogId, { page: 1, perPage: 10000 });
  messages.value = res.items.reverse();
  showChatModal.value = true;
};

const closeChatModal = () => {
  showChatModal.value = false;
};
</script>

<style scoped lang="scss">
.chats-list {
  background-color: $white;
  border-radius: 8px;
  border: 1px solid $border-gray;
  padding: 24px;

  &__title {
    letter-spacing: -0.6px;
    line-height: 1;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 6px;
  }

  &__description {
    color: $gray-light;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 24px;
  }

  &__load-more-dialog-button {
    min-width: 214px;
  }
}
</style>
