<template>
  <div class="chat-card">
    <div class="chat-card__user-icon-wrapper">
      <icon name="icon:user" class="chat-card__user-icon" />
    </div>

    <div class="chat-card__content-wrapper">
      <div class="chat-card__top-content-wrapper">
        <p class="chat-card__full-name">User</p>
        <ui-label v-if="dialog.lastMessage.senderRole === 'clinic'" title="Админ" icon="icon:user-cog" color="gray" class="chat-card__admin-label" />
        <ui-label v-if="dialog.lastMessage.generatedAi" title="ИИ" icon="icon:bot" color="white" class="chat-card__admin-label" />
      </div>

      <p class="chat-card__description">{{ dialog.lastMessage.bodyMain }}</p>

      <div class="chat-card__clock">
        <icon name="icon:clock" class="chat-card__clock-icon" />
        <span class="chat-card__created-at">{{ formatDate(dialog.lastMessage.createdAt) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiLabel from 'components/ui/UiLabel.vue';

import type { ApiDialogResponse } from '#shared/api/dialogs/types';

import { formatDate } from 'business-modules/systemic/utils/format-date';

defineProps<{
  dialog: ApiDialogResponse;
}>();
</script>

<style scoped lang="scss">
$user-icon-wrapper-size: 40px;
$user-icon-size: 20px;
$clock-icon-size: 12px;

.chat-card {
  display: flex;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid $border-gray;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:hover {
    background-color: $gray-light-5;
  }

  &__user-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $user-icon-wrapper-size;
    width: $user-icon-wrapper-size;
    border-radius: 50%;
    background-color: $mars-green-dark-3;
    margin-right: 16px;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__top-content-wrapper {
    display: flex;
  }

  &__user-icon {
    height: $user-icon-size;
    width: $user-icon-size;
    color: $mars-green;
  }

  &__full-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $gray-full-dark-3;
    margin-bottom: 4px;
  }

  &__admin-label {
    margin-left: 8px;
  }

  &__description {
    font-size: 14px;
    line-height: 20px;
    color: $gray-light;
    white-space: break-spaces;
    margin-bottom: 4px;
  }

  &__clock {
    display: flex;
    align-items: center;
  }

  &__clock-icon {
    width: $clock-icon-size;
    height: $clock-icon-size;
    color: $gray-light;
    margin-right: 4px;
  }

  &__created-at {
    font-size: 12px;
    line-height: 16px;
    color: $gray-light;
  }
}
</style>
