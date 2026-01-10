<template>
  <div class="dashboard-page">
    Личный кабинет
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
});
</script>

<style scoped lang="scss">
.dashboard-page {
  background-color: $white;
}
</style>
