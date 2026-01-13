<template>
  <nuxt-layout>
    <nuxt-page />

    <teleport v-if="overlay" to="body">
      <div class="overlay" />
    </teleport>
  </nuxt-layout>
</template>

<script lang="ts" setup>
import { useUiStore } from '#imports';

const uiStore = useUiStore();

const overlay = computed<boolean>(() => uiStore.overlay);

const htmlClasses = computed(() => ({
  'no-scroll': overlay.value,
}));

useHead({
  title: 'LIVI-PRO Platform - Управление ИИ-ассистентами',
  titleTemplate: '%s',
  htmlAttrs: {
    lang: 'ru',
    class: htmlClasses,
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    {
      name: 'description',
      content:
          'Платформа для управления ИИ-ассистентами в медицинских учреждениях',
    },
    {
      name: 'author',
      content: 'LIVI-PRO',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
});
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: $black-transparent;
}
</style>
