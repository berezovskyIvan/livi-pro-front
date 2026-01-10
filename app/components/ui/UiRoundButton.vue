<template>
  <component :is v-bind="attrs" :class="['ui-round-button', { disabled }]">
    <slot name="default" />
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to?: RouteLocationRaw | string;
  href?: string;
  disabled?: boolean;
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
$btn-size: 48px;
$shadow-color: #0000001a;

.ui-round-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $btn-size;
  height: $btn-size;
  background-color: $white;
  border-radius: 50%;
  color: $mars-green-dark;
  box-shadow: 0 10px 15px -3px $shadow-color, 0 4px 6px -4px $shadow-color;

  &:hover {
    background-color: $mars-green-light;
  }
}
</style>
