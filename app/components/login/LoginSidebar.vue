<template>
  <aside class="login-sidebar">
    <ui-round-button class="login-sidebar__back-btn" href="/">
      <Icon name="icon:arrow-left" class="login-sidebar__back-btn-icon" />
    </ui-round-button>
    <h1 class="login-sidebar__title">Добро пожаловать в<br>LIVI-PRO</h1>
    <p class="login-sidebar__description">Индивидуальные ИИ-ассистенты для клиник</p>
    <ul class="login-sidebar__features-wrapper">
      <li
        v-for="(item, index) in features"
        :key="index"
        class="login-sidebar__feature"
      >
        <div class="login-sidebar__feature-icon-wrapper">
          <Icon name="icon:check" class="login-sidebar__feature-icon" />
        </div>
        <span class="login-sidebar__feature-value">{{ item }}</span>
      </li>
    </ul>
    <p class="login-sidebar__short-description">Избавляем от рутины. Ради жизни</p>
  </aside>
</template>

<script setup lang="ts">
const features = [
  'Обучены под вашу клинику',
  '24/7: звонки и чаты',
  'Контроль качества разговоров',
  'Соблюдают 152-ФЗ',
  'Простая текстовая запись',
];
</script>

<style scoped lang="scss">
$back-btn-icon-size: 24px;
$feature-icon-wrapper-size: 24px;
$feature-icon-size: 16px;

.login-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background-color: $mars-green;
  padding: 48px;

  &__back-btn {
    position: absolute;
    top: 48px;
    left: 48px;

    &-icon {
      color: $mars-green-dark;
      width: $back-btn-icon-size;
      height: $back-btn-icon-size;
    }
  }

  &__title {
    color: $white;
    line-height: 1.25;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  &__description {
    opacity: 0.9;
    color: $white;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 32px;
  }

  &__features-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 0 48px;
    margin: 0;
    max-width: 448px;
    border-bottom: 1px solid $gray;
  }

  &__feature {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: $feature-icon-wrapper-size;
      height: $feature-icon-wrapper-size;
      border-radius: 50%;
      background-color: $gray;
      margin-right: 12px;
    }

    &-icon {
      color: $white;
      width: $feature-icon-size;
      height: $feature-icon-size;
    }

    &-value {
      opacity: 0.9;
      color: $white;
      font-size: 18px;
      line-height: 28px;
    }
  }

  &__short-description {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: $white;
    margin-top: 32px;
  }
}
</style>
