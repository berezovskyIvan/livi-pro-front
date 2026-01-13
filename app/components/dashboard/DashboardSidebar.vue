<template>
  <aside class="dashboard-sidebar">
    <dashboard-sidebar-header />
    <dashboard-sidebar-control-panel />
    <dashboard-sidebar-footer />
  </aside>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.dashboard-sidebar {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: $gray-dark;
  height: 100vh;
  width: 256px;
  border-right: 1px solid $border-gray;
}
</style>
