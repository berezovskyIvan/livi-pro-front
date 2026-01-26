<template>
  <ui-modal>
    <div class="consent-modal">
      <h3 class="consent-modal__title">Детали согласия</h3>
      <p class="consent-modal__description">
        Полная информация о лиде и истории диалога
      </p>

      <h5 class="consent-modal__subtitle consent-modal__subtitle_contacts">
        Контактная информация
      </h5>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Имя:</span>
        <span class="consent-modal__contact-value">{{ userName }}</span>
      </div>

      <div v-if="formatedPhone" class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Телефон:</span>
        <span class="consent-modal__contact-value">{{ formatedPhone }}</span>
      </div>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Роль:</span>
        <span class="consent-modal__contact-value">Пациент</span>
      </div>

      <hr class="consent-modal__hr" />

      <div class="consent-modal__subtitle-wrapper">
        <icon name="icon:messages" class="consent-modal__messages-icon" />
        <h5 class="consent-modal__subtitle">История диалога</h5>
      </div>

      <div class="consent-modal__message consent-modal__message_bot">
        <span class="consent-modal__message-source">Бот</span>
        <span class="consent-modal__message-value">Добрый день! Для продолжения нужно ваше согласие.</span>
      </div>

      <div class="consent-modal__message consent-modal__message_patient">
        <span class="consent-modal__message-source">Пациент</span>
        <span class="consent-modal__message-value">Да, даю согласие</span>
      </div>

      <hr class="consent-modal__hr" />

      <h5 class="consent-modal__subtitle consent-modal__subtitle_telegram">Telegram</h5>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">ID:</span>
        <span class="consent-modal__contact-value">XXXXXXX</span>
      </div>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Username:</span>
        <span class="consent-modal__contact-value">@user</span>
      </div>

      <hr class="consent-modal__hr" />

      <h5 class="consent-modal__subtitle consent-modal__subtitle_source">Источник согласия</h5>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Канал:</span>
        <span class="consent-modal__contact-value">Web</span>
      </div>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Устройство:</span>

        <div class="consent-modal__contact-value-wrapper">
          <icon name="icon:monitor" class="consent-modal__contact-monitor-icon" />
          <span class="consent-modal__contact-value">Desktop</span>
        </div>
      </div>

      <div class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">IP адрес:</span>
        <span class="consent-modal__contact-value">XXX.XXX.X.XXX</span>
      </div>

      <div v-if="consent.createdAt" class="consent-modal__contact-row">
        <span class="consent-modal__contact-label">Дата согласия:</span>
        <span class="consent-modal__contact-value">{{ formatDateManual(new Date(consent.createdAt)) }}</span>
      </div>

      <hr class="consent-modal__hr" />

      <h5 class="consent-modal__subtitle consent-modal__subtitle_status">Статус согласия</h5>
      <ui-label class="consent-modal__label" :title="labelTitle" :color="labelColor" />
      <ui-button
        v-if="consent.consent"
        color="red"
        class="consent-modal__btn"
        title="Отозвать согласие"
        :loading="withdrawConsentLoadingBtn"
        @click="withdrawConsent"
      />
    </div>
  </ui-modal>
</template>

<script setup lang="ts">
import type { ApiConsentResponse } from '#shared/api/consents/types';

import { formatDateManual } from 'business-modules/systemic/utils/format-date-manual';
import { formatPhone } from 'business-modules/systemic/utils/format-phone';
import type { UiLabelColor } from 'business-modules/ui/types';
import { getUserName } from 'business-modules/user/utils/get-user-name';

import { useConsentsStore } from '#imports';

const consentsStore = useConsentsStore();

const props = defineProps<{
  consent: ApiConsentResponse;
}>();

const withdrawConsentLoadingBtn = ref<boolean>(false);

const userName = computed<string>(() => {
  const user = props.consent.user;
  return getUserName(user?.firstName, user?.middleName, user?.lastName);
});

const formatedPhone = computed<string | undefined>(() => {
  if (props.consent?.user?.phone) {
    return formatPhone(props.consent.user.phone, '(NNN) NNN-NN-NN');
  }
  return undefined;
});

const labelTitle = computed<string>(() => {
  if (props.consent.consent) {
    return 'Активно';
  }

  return 'Отозвано';
});

const labelColor = computed<UiLabelColor>(() => {
  if (props.consent.consent) {
    return 'mars-green';
  }

  return 'red';
});

const withdrawConsent = () => {
  withdrawConsentLoadingBtn.value = true;

  consentsStore.withdraw({ consentId: props.consent.id }).finally(() => {
    withdrawConsentLoadingBtn.value = false;
  });
};
</script>

<style scoped lang="scss">
$messages-icon-size: 16px;
$monitor-icon-size: 12px;

.consent-modal {
  display: flex;
  flex-direction: column;
  width: 768px;

  &__title {
    letter-spacing: -0.6px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 6px;
  }

  &__description {
    font-size: 14px;
    line-height: 20px;
    color: $gray-light;
    margin-bottom: 24px;
  }

  &__subtitle-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    &_contacts, &_telegram, &_source, &_status {
      margin-bottom: 8px;
    }
  }

  &__contact-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__contact-label, &__contact-value {
    font-size: 14px;
    line-height: 20px;
  }

  &__contact-value-wrapper {
    display: flex;
    align-items: center;
  }

  &__contact-label {
    color: $gray-light;
  }

  &__contact-monitor-icon {
    width: $monitor-icon-size;
    height: $monitor-icon-size;
    margin-right: 4px;
  }

  &__hr {
    border: none;
    height: 1px;
    width: 100%;
    background-color: $border-gray;
    margin: 0 0 16px;
  }

  &__messages-icon {
    width: $messages-icon-size;
    height: $messages-icon-size;
    margin-right: 8px;
  }

  &__message {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    font-size: 14px;
    line-height: 20px;
    padding: 12px;

    &_bot {
      background-color: $gray-light-6;
      margin: 0 16px 8px 0;
    }

    &_patient {
      background-color: $gray-light-7;
      margin: 0 0 16px 16px;
    }

    &-source {
      font-weight: 500;
      margin-bottom: 4px;
    }

    &-value {
      color: $gray-light;
    }
  }

  &__label {
    margin-bottom: 12px;
  }

  &__btn {
    width: 138px;
  }
}
</style>
