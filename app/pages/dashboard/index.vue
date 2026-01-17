<template>
  <div class="dashboard-page">
    <h1 class="dashboard-page__title">Добро пожаловать в LIVI‑PRO!</h1>

    <p class="dashboard-page__description">
      Индивидуальные ИИ‑ассистенты для клиник помогут автоматизировать общение с<br>пациентами, снизить неявки, разгрузить администраторов и повысить качество сервиса.
    </p>

    <h2 class="dashboard-page__subtitle">Как проходит внедрение ИИ-ассистентов</h2>

    <p class="dashboard-page__description">
      Внедрение ассистентов — это не кнопка «Вкл/Выкл». Это постепенный бизнес-процесс, в котором ассистенты учатся<br>вместе с вашей клиникой. По сути, это похоже на адаптацию нового сотрудника: сначала он слушает, потом помогает<br>с простыми задачами, и только после этого берёт на себя самые ответственные функции.
    </p>

    <span class="dashboard-page__stages">Мы делаем внедрение в 3 этапа:</span>

    <dashboard-implementation-stages class="dashboard-page__implementation-stages" />
    <dashboard-process-info class="dashboard-page__process-info" />
    <dashboard-data-security class="dashboard-page__data-security" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
});
</script>

<style scoped lang="scss">
.dashboard-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  padding: 24px 16px;
  max-width: 1280px;

  &__title {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: $mars-green;
    margin-bottom: 16px;
  }

  &__description {
    font-size: 16px;
    line-height: 24px;
    color: $gray-full-dark-4;
    text-align: center;

    &:first-of-type {
      margin-bottom: 32px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }

  }

  &__subtitle {
    font-size: 24px;
    line-height: 32px;
    color: $gray-full-dark-3;
    margin-bottom: 16px;
  }

  &__stages {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: $mars-green;
    margin-bottom: 24px;
  }

  &__implementation-stages {
    margin-bottom: 24px;
  }

  &__process-info {
    margin-bottom: 32px;
  }
}
</style>
