<template>
  <div class="login-page">
    <login-sidebar class="login-page__aside" />
    <login-form class="login-page__form" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  height: 100vh;

  &__aside, &__form {
    height: 100%;
    width: 50%;
  }
}
</style>
