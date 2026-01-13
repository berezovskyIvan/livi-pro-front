<template>
  <footer class="dashboard-sidebar-footer">
    <p class="dashboard-sidebar-footer__full-name">{{ userFullName }}</p>
    <p class="dashboard-sidebar-footer__email">{{ userEmail }}</p>
    <button class="dashboard-sidebar-footer__logout-button" @click="logout">
      <icon name="icon:logout" class="dashboard-sidebar-footer__logout-button-icon" />
      <span class="dashboard-sidebar-footer__logout-button-value">Выйти</span>
    </button>
  </footer>
</template>

<script setup lang="ts">
import type { ApiUserMetadataResponse, ApiUserResponse } from '#shared/api/auth/types';

import { useAuthStore } from '#imports';

const authStore = useAuthStore();

const userFullName = computed<ApiUserMetadataResponse['full_name'] | undefined>(() => authStore.user?.fullName);
const userEmail = computed<ApiUserResponse['email'] | undefined>(() => authStore.user?.email);

const logout = () => {
  authStore.logout();
};
</script>

<style scoped lang="scss">
$logout-icon-size: 16px;

.dashboard-sidebar-footer {
  display: flex;
  flex-direction: column;
  border-top: 1px solid $border-gray;
  margin-top: auto;
  padding: 16px 8px 8px;

  &__full-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $gray-full-dark-3;
    padding: 0 12px;
  }

  &__email {
    font-size: 12px;
    line-height: 16px;
    color: $gray-light;
    padding: 0 12px;
    margin-bottom: 16px;
  }

  &__logout-button {
    display: flex;
    align-items: center;
    height: 36px;
    color: $gray-light;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border-radius: 6px;
    cursor: pointer;
    padding: 0 12px;

    &:hover {
      background-color: $gray-light-3;
      color: $gray-full-dark-3;
    }

    &-icon {
      width: $logout-icon-size;
      height: $logout-icon-size;
      margin-right: 12px;
    }
  }
}
</style>
