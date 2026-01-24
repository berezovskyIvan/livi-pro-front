<template>
  <div class="consents-page">
    <h1 class="consents-page__title">Согласия пациентов</h1>
    <p class="consents-page__description">
      Все согласия на обработку персональных данных, полученные через Telegram-ботов
    </p>
    <consents-list />
  </div>
</template>

<script setup lang="ts">
import { useConsentsStore } from '#imports';

const consentsStore = useConsentsStore();

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
});

await callOnce('consents-list', () => consentsStore.list({ page: 1, perPage: 12 }));
</script>

<style scoped lang="scss">
.consents-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  padding: 24px;

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 16px;
    line-height: 24px;
    color: $gray-light;
    margin-bottom: 24px;
  }
}
</style>
