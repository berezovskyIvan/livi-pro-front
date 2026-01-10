<template>
  <header class="dashboard-header">
    <div class="dashboard-header__text-wrapper">
      <button class="dashboard-header__panel-button">
        <Icon name="icon:panel" class="dashboard-header__panel-icon" />
      </button>
      <h3 class="dashboard-header__title">LIVI_PRO Platform</h3>
      <p class="dashboard-header__description">Панель управления ИИ-ассистентами</p>
    </div>

    <div class="dashboard-header__profile-wrapper">
      <button class="dashboard-header__bell-button">
        <Icon name="icon:bell" class="dashboard-header__bell-icon" />
      </button>

      <div class="dashboard-header__profile-icon-wrapper">{{ userFullName?.substring(0, 1) }}</div>
      <p class="dashboard-header__profile-full-name">{{ userFullName }}</p>
      <p class="dashboard-header__profile-email">{{ userEmail }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { ApiUserMetadataResponse, ApiUserResponse } from '#shared/api/auth/types';

import { useAuthStore } from '#imports';

const authStore = useAuthStore();

const userFullName = computed<ApiUserMetadataResponse['full_name'] | undefined>(() => authStore.user?.fullName);
const userEmail = computed<ApiUserResponse['email'] | undefined>(() => authStore.user?.email);
</script>

<style scoped lang="scss">
$panel-button-size: 28px;
$panel-icon-size: 16px;
$bell-button-size: 28px;
$bell-icon-size: 16px;
$profile-icon-wrapper-size: 28px;

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $mars-green;
  padding: 0 12px;

  &__text-wrapper {
    display: grid;
    align-items: center;
    grid-template:
        "panel-button title"
        "panel-button description";
  }

  &__panel-button {
    grid-area: panel-button;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $panel-button-size;
    height: $panel-button-size;
    color: $white;
    cursor: pointer;
    border-radius: 6px;
    margin-right: 8px;

    &:hover {
      color: $gray-full-dark-3;
      background-color: $mars-green-dark-2;
    }
  }

  &__panel-icon {
    width: $panel-icon-size;
    height: $panel-icon-size;
  }

  &__title {
    grid-area: title;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $white;
  }

  &__description {
    grid-area: description;
    font-size: 12px;
    line-height: 16px;
    color: $gray-light-4;
  }

  &__profile-wrapper {
    display: grid;
    align-items: center;
    grid-template:
        "bell-button profile-icon-wrapper full-name"
        "bell-button profile-icon-wrapper email";
  }

  &__bell-button {
    grid-area: bell-button;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $bell-button-size;
    height: $bell-button-size;
    color: $white;
    cursor: pointer;
    border-radius: 6px;
    margin-right: 8px;

    &:hover {
      color: $gray-full-dark-3;
      background-color: $mars-green-dark-2;
    }
  }

  &__bell-icon {
    width: $bell-icon-size;
    height: $bell-icon-size;
  }

  &__profile-icon-wrapper {
    grid-area: profile-icon-wrapper;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $profile-icon-wrapper-size;
    height: $profile-icon-wrapper-size;
    background-color: $mars-green-light-2;
    border-radius: 50%;
    font-size: 12px;
    line-height: 16px;
    color: $mars-green;
    margin-right: 6px;
  }

  &__profile-full-name {
    grid-area: full-name;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    color: $white;
  }

  &__profile-email {
    grid-area: email;
    font-size: 10px;
    line-height: 1.25;
    color: $gray-light-4;
  }
}
</style>
