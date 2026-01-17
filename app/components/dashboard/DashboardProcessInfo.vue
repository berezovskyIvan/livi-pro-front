<template>
  <div class="dashboard-process-info">
    <h3 class="dashboard-process-info__title">Почему это долгосрочный процесс</h3>
    <p class="dashboard-process-info__description dashboard-process-info__description_ai">
      ИИ-ассистент — это не шаблонное решение. Он обучается именно на данных вашей клиники: на ваших вопросах, звонках, скриптах.
    </p>
    <p class="dashboard-process-info__description dashboard-process-info__description_learning">
      Первые 2–3 месяца он учится, адаптируется и постепенно начинает брать на себя рутинные задачи.
    </p>

    <p class="dashboard-process-info__description dashboard-process-info__description_strong">
      К 4–5 месяцу ассистент выходит на максимальную эффективность:
    </p>

    <ul class="dashboard-process-info__advantages">
      <li class="dashboard-process-info__advantages-item">обрабатывает до 1800+ обращений в месяц,</li>
      <li class="dashboard-process-info__advantages-item">автоматизирует до 90% типовых задач,</li>
      <li class="dashboard-process-info__advantages-item">реально влияет на рост конверсии и выручки клиники.</li>
    </ul>

    <p class="dashboard-process-info__strategy">
      Внедрение ассистентов — это стратегия, а не разовая настройка. Настоящая ценность проявляется в долгосрочном сотрудничестве.
    </p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.dashboard-process-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid $mars-green-dark-3;
  background: rgb(255, 255, 255) linear-gradient(to right, rgba(89, 192, 192, 0.1), rgba(135, 197, 197, 0.1), rgba(135, 197, 197, 0)) repeat scroll 0% 0% / auto padding-box border-box;

  &__title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: $gray-full-dark-3;
    margin-bottom: 16px;
  }

  &__description {
    align-self: flex-start;
    font-size: 14px;

    &_ai, &_learning {
      line-height: 1.625;
      color: $gray-full-dark-4;
    }

    &_ai {
      margin-bottom: 12px;
    }

    &_learning {
      margin-bottom: 24px;
    }

    &_strong {
      font-weight: 500;
      line-height: 28px;
      color: $gray-full-dark-3;
      margin-bottom: 12px;
    }
  }

  &__advantages {
    align-self: flex-start;
    margin: 0 0 24px;
    padding-left: 40px;

    &-item {
      font-size: 14px;
      line-height: 1.625;
      color: $gray-full-dark-4;
    }
  }

  &__strategy {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: $mars-green;
  }
}
</style>
