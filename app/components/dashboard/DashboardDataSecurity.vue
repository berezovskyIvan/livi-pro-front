<template>
  <div class="dashboard-data-security">
    <Icon name="icon:shield" class="dashboard-data-security__shield-icon" />
    <div class="dashboard-data-security__top-block-wrapper">
      <h3 class="dashboard-data-security__title">Безопасность данных</h3>
      <Icon name="icon:check-circle" class="dashboard-data-security__check-circle-icon" />
    </div>
    <p class="dashboard-data-security__description">
      Все данные хранятся в России и соответствуют требованиям 152‑ФЗ (о персональных данных) и 323‑ФЗ (об основах охраны здоровья граждан). Ваша информация и данные пациентов под надежной защитой.
    </p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$shield-icon-size: 32px;
$check-circle-icon-size: 16px;

.dashboard-data-security {
  display: grid;
  grid-template:
        "shield-icon top-block-wrapper"
        "shield-icon description";
  width: -webkit-fill-available;
  padding: 24px;
  border-radius: 12px;
  background-image: linear-gradient(to right, rgba(22, 162, 73, 0.05), rgba(89, 192, 192, 0.05));
  border: 2px solid rgba(22, 162, 73, 0.2);

  &__shield-icon {
    grid-area: shield-icon;
    width: $shield-icon-size;
    height: $shield-icon-size;
    color: $green;
    margin-right: 12px;
  }

  &__top-block-wrapper {
    grid-area: top-block-wrapper;
    display: flex;
  }

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: $gray-full-dark-3;
    margin-right: 8px;
  }

  &__check-circle-icon {
    align-self: center;
    width: $check-circle-icon-size;
    height: $check-circle-icon-size;
    color: $green;
  }

  &__description {
    grid-area: description;
    font-size: 14px;
    line-height: 1.625;
    color: $gray-full-dark-4;
    margin-top: 8px;
  }
}
</style>