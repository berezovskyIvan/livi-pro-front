<template>
  <div class="chats-content">
    <dashboard-card title="Всего чатов" :counter="totalDialogItems ?? 0" icon="icon:chat" />
  </div>
</template>

<script setup lang="ts">
import DashboardCard from 'components/dashboard/DashboardCard.vue';

import type { ApiDialogsListResponse } from '#shared/api/dialogs/types';

import { useDialogsStore } from '#imports';

const dialogsStore = useDialogsStore();

const totalDialogItems = computed<ApiDialogsListResponse['totalItems'] | undefined>(() => dialogsStore.totalItems);
</script>

<style scoped lang="scss">
.chats-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style>
