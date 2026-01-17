<template>
  <div id="app" class="dashboard-layout">
    <dashboard-sidebar class="dashboard-layout__sidebar" />
    <dashboard-header class="dashboard-layout__header" />
    <main class="dashboard-layout__main">
      <slot name="default" />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.dashboard-layout {
  display: grid;
  grid-template:
        "sidebar header" 64px
        "sidebar main" auto
        / 256px auto;

  &__sidebar {
    grid-area: sidebar;
    position: fixed;
  }

  &__header {
    grid-area: header;
  }

  &__main {
    grid-area: main;
    display: flex;
    justify-content: center;
  }
}
</style>
