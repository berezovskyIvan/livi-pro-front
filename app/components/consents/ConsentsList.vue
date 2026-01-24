<template>
  <div class="consents-list">
    <consent-card
      v-for="consent in consents"
      :key="consent.id"
      :consent
      class="consents-list__item"
    />

    <ui-button
      v-if="showLoadMoreConsentsButton"
      title="Загрузить ещё"
      class="consents-list__load-more-consents-button"
      :loading="loadConsentsButtonLoading"
      @click="loadMoreConsents"
    />
  </div>
</template>

<script setup lang="ts">
import ConsentCard from 'components/consents/ConsentCard.vue';

import type { ApiConsentsListResponse } from '#shared/api/consents/types';

import { useConsentsStore } from '#imports';

const consentsStore = useConsentsStore();
const loadConsentsButtonLoading = ref<boolean>(false);

const consents = computed<ApiConsentsListResponse['items'] | undefined>(() => consentsStore.items);
const consentsCurrentPage = computed<ApiConsentsListResponse['currentPage']>(() => consentsStore.currentPage ?? 0);
const consentsTotalPages = computed<ApiConsentsListResponse['totalPages']>(() => consentsStore.totalPages ?? 0);
const showLoadMoreConsentsButton = computed<boolean>(() => {
  return consentsCurrentPage.value < consentsTotalPages.value;
});

const loadMoreConsents = () => {
  loadConsentsButtonLoading.value = true;
  consentsStore.list({ page: consentsCurrentPage.value + 1, perPage: 12 }).finally(() => {
    loadConsentsButtonLoading.value = false;
  });
};
</script>

<style scoped lang="scss">
.consents-list {
  display: flex;
  flex-direction: column;

  &__item {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &__load-more-consents-button {
    width: fit-content;
    min-width: 214px;
  }
}
</style>
