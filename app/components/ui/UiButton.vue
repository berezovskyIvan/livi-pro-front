<template>
  <component :is v-bind="attrs" :class="['ui-button', `ui-button_${attrs.color}`, { disabled }]">
    <ui-loader v-if="loading" color="white" />
    <span v-else-if="title" class="ui-button__value">{{ title }}</span>
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

import type { UiButtonColor } from 'business-modules/ui/types';

const props = defineProps<{
  to?: RouteLocationRaw | string;
  href?: string;
  color?: UiButtonColor;
  disabled?: boolean;
  title?: string;
  loading?: boolean;
}>();

const is = computed(() => {
  if (props.to) {
    return resolveComponent('nuxt-link');
  }

  if (props.href) {
    return 'a';
  }

  return 'button';
});

const attrs = computed(() => {
  return {
    to: props.to,
    href: props.href,
    disabled: props.disabled,
    color: props.color || 'mars-green',
  };
});
</script>

<style scoped lang="scss">
$shadow-color: #0000001a;

.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;

  &_mars-green {
    background-color: $mars-green;
  }

  &_red {
    background-color: $red;
  }

  &__value {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $white;
  }
}
</style>
