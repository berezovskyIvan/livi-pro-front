<template>
  <div class="dashboard-card">
    <h3 class="dashboard-card__title">{{ title }}</h3>
    <span class="dashboard-card__counter">{{ counter }}</span>
    <icon :name="icon" class="dashboard-card__icon" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  counter: number;
  icon: string;
}>();
</script>

<style scoped lang="scss">
$shadow-color: #0000000d;
$icon-size: 16px;

.dashboard-card {
  position: relative;
  border-radius: 8px;
  background-color: $white;
  border: 1px solid $border-gray;
  box-shadow: 0 1px 2px 0 $shadow-color;
  padding: 24px;

  &__title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.35px;
    margin-bottom: 8px;
  }

  &__counter {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  &__icon {
    position: absolute;
    top: 24px;
    right: 24px;
    width: $icon-size;
    height: $icon-size;
    color: $gray-light;
  }
}
</style>
