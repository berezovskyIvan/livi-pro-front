<template>
  <div class="dashboard-implementation-stage">
    <header class="dashboard-implementation-stage__header">
      <div class="dashboard-implementation-stage__number-wrapper">
        {{ stage.number }}
      </div>
      <h3 class="dashboard-implementation-stage__title">{{ stage.title }}</h3>
    </header>

    <span class="dashboard-implementation-stage__subtitle">{{ stage.subtitle }}</span>

    <p class="dashboard-implementation-stage__description" v-html="stage.description" />

    <ul v-if="stage.list" class="dashboard-implementation-stage__list">
      <li
        v-for="(value, index) in stage.list"
        :key="index"
        class="dashboard-implementation-stage__list__item"
      >
        {{ value }}
      </li>
    </ul>

    <footer class="dashboard-implementation-stage__footer">
      {{ stage.footerValue }}
    </footer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stage: {
    number: number;
    title: string;
    subtitle: string;
    footerValue: string;
    description?: string;
    list?: string[];
  };
}>();
</script>

<style scoped lang="scss">
$number-wrapper-size: 40px;

.dashboard-implementation-stage {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 2px solid $border-gray;
  padding: 24px;

  &__header {
    display: flex;
    margin-bottom: 24px;
  }

  &__number-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: $number-wrapper-size;
    height: $number-wrapper-size;
    background-color: $mars-green;
    color: $white;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    margin-right: 12px;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.45px;
    line-height: 1.25;
    color: $gray-full-dark-3;
  }

  &__subtitle {
    display: flex;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.625;
    color: $gray-full-dark-3;
    margin-bottom: 16px;
  }

  &__description, &__list {
    color: $gray-light;
    font-size: 14px;
    line-height: 1.625;
  }

  &__footer {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $mars-green;
    margin-top: auto;
  }
}
</style>
