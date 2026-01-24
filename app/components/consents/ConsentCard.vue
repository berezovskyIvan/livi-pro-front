<template>
  <div class="consent-card">
    <header class="consent-card__header">
      <icon name="icon:user" class="consent-card__user-icon" />
      <span class="consent-card__user-full-name">User</span>
      <span class="consent-card__social-nickname">@user</span>
      <ui-label v-if="!consent.consent" class="consent-card__label" title="Отозвано" color="red" />
    </header>

    <footer class="consent-card__footer">
      <icon name="icon:phone" class="consent-card__phone-icon" />
      <span class="consent-card__phone">+7 (XXX) XXX-XX-XX</span>
      <template v-if="consent.createdAt">
        <icon name="icon:clock" class="consent-card__clock-icon" />
        <span class="consent-card__created-at">{{ formatDateManual(new Date(consent.createdAt)) }}</span>
      </template>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { ApiConsentResponse } from '#shared/api/consents/types';

import { formatDateManual } from 'business-modules/systemic/utils/format-date-manual';

defineProps<{
  consent: ApiConsentResponse;
}>();
</script>

<style scoped lang="scss">
$user-icon-size: 16px;
$phone-icon-size: 16px;
$clock-icon-size: 14px;

.consent-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid $border-gray;
  padding: 12px 16px 8px;
  cursor: pointer;

  &:hover {
    background-color: $gray-light-3;
    border-color: $mars-green;
  }

  &__header {
    display: grid;
    align-items: center;
    grid-template:
        "user-icon user-full-name user-full-name"
        "user-icon social-nickname label" / min-content min-content min-content;
    padding-bottom: 12px;
  }

  &__user-icon {
    grid-area: user-icon;
    width: $user-icon-size;
    height: $user-icon-size;
    color: $gray-light;
    margin-right: 16px;
  }

  &__user-full-name {
    grid-area: user-full-name;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $gray-full-dark-3;
  }

  &__social-nickname {
    grid-area: social-nickname;
    color: $gray-light;
    font-size: 12px;
    line-height: 16px;
    margin-right: 8px;
  }

  &__label {
    grid-area: label;
  }

  &__footer {
    display: flex;
    align-items: center;
  }

  &__phone-icon {
    width: $phone-icon-size;
    height: $phone-icon-size;
    color: $gray-light;
    margin-right: 16px;
  }

  &__phone {
    font-size: 14px;
    line-height: 20px;
    margin-right: 24px;
  }

  &__clock-icon {
    width: $clock-icon-size;
    height: $clock-icon-size;
    color: $gray-light;
    margin-right: 8px;
  }

  &__created-at {
    font-size: 12px;
    line-height: 16px;
    color: $gray-light;
  }
}
</style>
