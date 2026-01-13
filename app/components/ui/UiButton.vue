<template>
  <component :is v-bind="attrs" :class="['ui-button', { disabled }]">
    <ui-loader v-if="loading" color="white" />
    <span v-else-if="title" class="ui-button__value">{{ title }}</span>
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to?: RouteLocationRaw | string;
  href?: string;
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
  };
});
</script>

<style scoped lang="scss">
$shadow-color: #0000001a;

.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: $mars-green;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;

  &__value {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $white;
  }
}
</style>
