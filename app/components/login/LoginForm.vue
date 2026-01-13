<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <h2 class="login-form__title">LIVI_PRO</h2>
    <p class="login-form__description">{{ description }}</p>

    <div class="login-form__wrapper">
      <template v-if="formType === 'register'">
        <div class="login-form__raw">
          <span class="login-form__label">ФИО</span>
          <ui-input v-model="fullName" placeholder="Введите ФИО" class="login-form__input" />
        </div>

        <div class="login-form__raw">
          <span class="login-form__label">Название клиники</span>
          <ui-input v-model="clinicName" placeholder="Введите название клиники" class="login-form__input" />
        </div>

        <div class="login-form__raw">
          <span class="login-form__label">Телефон</span>
          <ui-input v-model="phone" placeholder="+7 (999) 123-45-67" class="login-form__input" />
        </div>
      </template>

      <div class="login-form__raw">
        <span class="login-form__label">Email</span>
        <ui-input v-model="email" type="email" placeholder="Введите email" class="login-form__input" />
      </div>

      <div class="login-form__raw">
        <span class="login-form__label">Пароль</span>
        <ui-input v-model="password" :type="passwordInputType" placeholder="Введите пароль" class="login-form__input">
          <template #append>
            <icon class="login-form__input-eye-icon" :name="passwordInputIcon" @click="changePasswordVisibility" />
          </template>
        </ui-input>
      </div>

      <button v-if="formType === 'auth'" type="button" class="login-form__reset-password-btn" @click="resetPassword">{{ resetPasswordButtonTitle }}</button>
      <ui-button type="submit" :title="submitButtonTitle" class="login-form__submit-btn" />
      <button v-if="formType === 'auth'" type="button" class="login-form__register-btn" @click="showRegisterForm">Регистрация</button>
      <button v-if="formType === 'register'" type="button" class="login-form__auth-back-btn" @click="showAuthForm">
        <icon name="icon:lucide-arrow-left" class="login-form__auth-back-btn-icon" />
        <span>Уже есть аккуант?</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { ApiAuthResponse } from '#shared/api/auth/types';

import { RouteNames } from 'business-modules/router/enums';

import { useAuthStore } from '#imports';

const formType = ref<string>('auth');
const fullName = ref<string>('');
const clinicName = ref<string>('');
const phone = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const isPasswordVisible = ref<boolean>(false);
const submitButtonLoading = ref<boolean>(false);
const resetPasswordButtonLoading = ref<boolean>(false);

const authStore = useAuthStore();

const accessToken = useCookie<string | undefined>('accessToken');
const refreshToken = useCookie<string | undefined>('refreshToken');
const expiresIn = useCookie<number | undefined>('expiresIn');
const expiresAt = useCookie<number | undefined>('expiresAt');
const userFullName = useCookie<string | undefined>('userFullName');
const userEmail = useCookie<string | undefined>('userEmail');

const description = computed<string>(() => {
  if (formType.value === 'register') {
    return 'Регистрация';
  }

  return 'Вход в систему';
});

const passwordInputType = computed(() => {
  if (isPasswordVisible.value) {
    return 'text';
  }

  return 'password';
});

const passwordInputIcon = computed(() => {
  const iconPrefix = 'icon:';

  if (isPasswordVisible.value) {
    return `${iconPrefix}close-eye`;
  }

  return `${iconPrefix}eye`;
});

const submitButtonTitle = computed<string>(() => {
  if (formType.value === 'auth') {
    if (submitButtonLoading.value) {
      return 'Входим...';
    }

    return 'Войти';
  }

  if (submitButtonLoading.value) {
    return 'Регистрируем...';
  }

  return 'Зарегистрироваться';
});

const resetPasswordButtonTitle = computed<string>(() => {
  if (resetPasswordButtonLoading.value) {
    return 'Отправляем...';
  }

  return 'Забыли пароль?';
});

const changePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const onSubmit = () => {
  if (formType.value === 'auth') {
    authorizeUser();
    return;
  }

  registerUser();
};

const authorizeUser = () => {
  submitButtonLoading.value = true;

  authStore.auth({ email: email.value, password: password.value }).then((res: ApiAuthResponse) => {
    accessToken.value = res.access_token;
    refreshToken.value = res.refresh_token;
    expiresIn.value = res.expires_in;
    expiresAt.value = res.expires_at;
    userFullName.value = res.user.user_metadata.full_name;
    userEmail.value = res.user.email;

    navigateTo({ name: RouteNames.Dashboard });
  }).catch(() => {
    accessToken.value = undefined;
    refreshToken.value = undefined;
    expiresIn.value = undefined;
    expiresAt.value = undefined;
  }).finally(() => {
    submitButtonLoading.value = false;
  });
};

const registerUser = () => {
  submitButtonLoading.value = true;

  authStore.register({
    email: email.value,
    password: password.value,
    data: {
      phone: phone.value,
      fullName: fullName.value,
      clinicName: clinicName.value,
      role: 'client',
    },
  }).then(() => {
    formType.value = 'auth';
  }).finally(() => {
    submitButtonLoading.value = false;
  });
};

const resetPassword = () => {
  resetPasswordButtonLoading.value = true;

  authStore.resetPassword(email.value).finally(() => {
    resetPasswordButtonLoading.value = false;
  });
};

const showRegisterForm = () => {
  formType.value = 'register';
};

const showAuthForm = () => {
  formType.value = 'auth';
};
</script>

<style scoped lang="scss">
$eye-icon-size: 20px;
$auth-back-btn-icon-size: 16px;

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 48px;
  background-color: $white;

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 8px;
  }

  &__description {
    color: $gray-light;
    margin-bottom: 32px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 384px;
  }

  &__raw {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  &__input {
    &-eye-icon {
      width: $eye-icon-size;
      height: $eye-icon-size;
    }
  }

  &__reset-password-btn, &__register-btn, &__auth-back-btn {
    font-size: 14px;
    line-height: 20px;
    color: $mars-green;
    cursor: pointer;
  }

  &__reset-password-btn {
    align-self: flex-end;
    margin-bottom: 24px;
  }

  &__auth-back-btn {
    display: flex;
    align-items: center;
    align-self: center;

    &-icon {
      width: $auth-back-btn-icon-size;
      height: $auth-back-btn-icon-size;
      margin-right: 4px;
    }
  }

  &__submit-btn {
    margin-bottom: 24px;
  }
}
</style>
