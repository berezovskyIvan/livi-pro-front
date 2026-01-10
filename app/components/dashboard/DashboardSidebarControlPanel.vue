<template>
  <div class="dashboard-sidebar-control-panel">
    <h5 class="dashboard-sidebar-control-panel__title">Управление</h5>
    <template v-for="(tab, index) in tabs" :key="index">
      <component
        :is="tab.is"
        :class="['dashboard-sidebar-control-panel__tab', { 'dashboard-sidebar-control-panel__tab_active': isActiveTab(tab.routeName) }]"
        @click="onTabClick(tab.routeName)"
      >
          <Icon v-if="tab.icon" :name="tab.icon" class="dashboard-sidebar-control-panel__tab-icon" />
          <span class="dashboard-sidebar-control-panel__tab-value">{{ tab.value }}</span>
          <Icon
            v-if="tab.children"
            name="icon:arrow-right"
            :class="['dashboard-sidebar-control-panel__tab-arrow-icon', { 'dashboard-sidebar-control-panel__tab-arrow-icon_is-open': isOpenDialogsTab }]"
          />
      </component>

      <div v-if="isOpenDialogsTab" class="dashboard-sidebar-control-panel__tab-child-wrapper">
        <component
            v-for="(childTab, childIndex) in tab.children"
            :key="childIndex"
            :is="childTab.is"
            :class="['dashboard-sidebar-control-panel__tab-child', { 'dashboard-sidebar-control-panel__tab-child_active': isActiveTab(childTab.routeName) }]"
            @click="onTabClick(childTab.routeName)"
        >
          <Icon v-if="childTab.icon" :name="childTab.icon" class="dashboard-sidebar-control-panel__tab-child-icon" />
          <span class="dashboard-sidebar-control-panel__tab-child-value">{{ childTab.value }}</span>
        </component>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from 'business-modules/router/enums';

const route = useRoute();

const tabs = [
  {
    is: resolveComponent('nuxt-link'),
    value: 'Главная',
    icon: 'icon:chart',
    routeName: RouteNames.Dashboard,
  },
  {
    is: 'div',
    value: 'Диалоги',
    icon: 'icon:messages',
    children: [
      {
        is: resolveComponent('nuxt-link'),
        value: 'Чаты',
        icon: 'icon:chat',
        routeName: RouteNames.DashboardChats,
      },
      {
        is: resolveComponent('nuxt-link'),
        value: 'Контроль качества',
        icon: 'icon:clipboard-check',
        routeName: RouteNames.DashboardQualityControl,
      },
      {
        is: resolveComponent('nuxt-link'),
        value: 'Звонки',
        icon: 'icon:phone-call',
        routeName: RouteNames.DashboardCalls,
      },
      {
        is: resolveComponent('nuxt-link'),
        value: 'Консьерж',
        icon: 'icon:headset',
        routeName: RouteNames.DashboardConcierge,
      },
    ],
  },
  {
    is: resolveComponent('nuxt-link'),
    value: 'Аналитика',
    icon: 'icon:chart',
    routeName: RouteNames.DashboardAnalytics,
  },
  {
    is: resolveComponent('nuxt-link'),
    value: 'База знаний',
    icon: 'icon:file-text',
    routeName: RouteNames.DashboardKnowledge,
  },
  {
    is: resolveComponent('nuxt-link'),
    value: 'Согласия',
    icon: 'icon:shield',
    routeName: RouteNames.DashboardConsents,
  },
  {
    is: resolveComponent('nuxt-link'),
    value: 'Биллинг',
    icon: 'icon:credit-card',
    routeName: RouteNames.DashboardBilling,
  },
];

const isOpenDialogsTab = ref<boolean>(false);

const isActiveTab = (tabRouteName?: string) => {
  return tabRouteName === route.name;
};

const onTabClick = (routeName?: string) => {
  if (routeName) {
    navigateTo({ name: routeName });
  } else {
    changeDialogsTabVisibility();
  }
};

const changeDialogsTabVisibility = () => {
  isOpenDialogsTab.value = !isOpenDialogsTab.value;
};
</script>

<style scoped lang="scss">
$tab-icon-size: 16px;
$arrow-icon-size: 16px;

.dashboard-sidebar-control-panel {
  padding: 16px;

  &__title {
    display: flex;
    align-items: center;
    height: 32px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: $gray-light;
    margin: 0 0 8px 8px;
  }

  &__tab {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 40px;
    border-radius: 6px;
    padding: 8px 12px;
    cursor: pointer;
    color: $gray-full-dark-2;

    &_active {
      background-color: $mars-green;
      color: $white;
    }

    &:hover {
      background-color: $gray-light-2;
      color: $gray-full-dark;
    }

    &-icon {
      width: $tab-icon-size;
      height: $tab-icon-size;
      margin-right: 12px;
    }

    &-value {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    &-arrow-icon {
      width: $arrow-icon-size;
      height: $arrow-icon-size;
      margin-left: auto;

      &_is-open {
        transform: rotate(90deg);
      }
    }

    &-child-wrapper {
      display: flex;
      flex-direction: column;
      border-left: 1px solid $border-gray;
      margin: 0 14px;
      padding: 0 10px;
    }

    &-child {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 28px;
      color: $gray-full-dark-2;
      border-radius: 6px;
      padding: 8px;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 4px;
      }

      &:hover {
        background-color: $gray-light-2;
        color: $gray-full-dark;
      }

      &_active {
        background-color: $mars-green;
        color: $white;
      }

      &-icon {
        width: $tab-icon-size;
        height: $tab-icon-size;
        margin-right: 12px;
      }

      &-value {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
