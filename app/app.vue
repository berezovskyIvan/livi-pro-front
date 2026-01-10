<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
useHead({
  title: 'LIVI-PRO Platform - Управление ИИ-ассистентами',
  titleTemplate: '%s',
  htmlAttrs: {
    lang: 'ru',
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
