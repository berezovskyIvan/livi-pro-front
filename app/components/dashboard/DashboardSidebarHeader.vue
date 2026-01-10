<template>
  <header class="dashboard-sidebar-header">
    <div class="dashboard-sidebar-header__logo">
      L
    </div>
    <div class="dashboard-sidebar-header__text-wrapper">
      <h6 class="dashboard-sidebar-header__title">LIVI_PRO</h6>
      <p class="dashboard-sidebar-header__description">Platform</p>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$logo-size: 32px;

.dashboard-sidebar-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid $border-gray;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $logo-size;
    height: $logo-size;
    background-color: $mars-green;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: $white;
    margin-right: 12px;
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  }

  &__description {
    font-size: 12px;
    line-height: 16px;
    color: $gray-light;
  }
}
</style>
