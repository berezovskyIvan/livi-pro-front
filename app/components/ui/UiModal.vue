<template>
  <teleport to="body">
    <div class="ui-modal" @keydown.esc="close">
      <icon name="icon:cross" class="ui-modal__close-button" @click="close" />

      <slot name="default" />
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { useUiStore } from '#imports';

const uiStore = useUiStore();

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
};

onBeforeMount(() => {
  uiStore.SET_OVERLAY(true);
  document.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
  uiStore.SET_OVERLAY(false);
  document.removeEventListener('keydown', handleEscapeKey);
});

const close = () => {
  uiStore.SET_OVERLAY(false);
  emit('close');
};
</script>

<style lang="scss" scoped>
$close-button-size: 16px;

.ui-modal {
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  background-color: $white;
  border-radius: 12px;

  &__close-button {
    position: absolute;
    width: $close-button-size;
    height: $close-button-size;
    top: 16px;
    right: 16px;
    color: $gray-full-dark-3;
    cursor: pointer;

    &:not(:hover) {
      opacity: 0.7;
    }
  }
}
</style>
