<template>
  <div :class="['ui-label', `ui-label_${color}`]">
    <Icon v-if="icon" :name="icon" class="ui-label__icon" />
    <h6 class="ui-label__title">{{ title }}</h6>
  </div>
</template>

<script setup lang="ts">
import type { UiLabelColor } from 'business-modules/ui/types';

defineProps<{
  title: string;
  color: UiLabelColor;
  icon?: string;
}>();
</script>

<style scoped lang="scss">
$icon-size: 12px;

.ui-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 2px 10px;
  border-radius: 12px;

  &_white {
    background-color: $white;
    color: $gray-full-dark-3;
    border: 1px solid $border-gray;
  }

  &_gray {
    background-color: $gray-light-3;
    color: $gray-full-dark-3;
  }

  &_mars-green {
    color: $white;
    background-color: $mars-green;
  }

  &_red {
    background-color: $red;
    color: $white;
  }

  &__icon {
    width: $icon-size;
    height: $icon-size;
    margin-right: 4px;
  }

  &__title {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
