<template>
  <icon name="lucide:loader-circle" :class="['ui-loader', color ? `ui-loader_${color}`: undefined]" />
</template>

<script setup lang="ts">
type LoaderColor = 'white';

defineProps<{
  color?: LoaderColor;
}>();
</script>

<style lang="scss" scoped>
$icon-size: 24px;

.ui-loader {
  width: $icon-size;
  height: $icon-size;
  margin-right: 8px;
  animation: rotation 1s infinite linear;

  &_white {
    color: $white;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
