import { RoutePaths } from 'business-modules/router/enums';

import type { AuthByCookiesResponse } from '../../app/stores/useAuthStore';

import { useAuthStore } from '#imports';

export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore();

    const accessToken = useCookie<string | undefined>('accessToken');
    const refreshToken = useCookie<string | undefined>('refreshToken');
    const expiresIn = useCookie<number | undefined>('expiresIn');
    const expiresAt = useCookie<number | undefined>('expiresAt');
    const userFullName = useCookie<string | undefined>('userFullName');
    const userEmail = useCookie<string | undefined>('userEmail');
    const auth: boolean = Boolean(accessToken.value &&
        refreshToken.value &&
        expiresIn.value &&
        expiresAt.value &&
        userFullName.value &&
        userEmail.value,
    );

    if (auth &&
        !authStore.accessToken &&
        !authStore.refreshToken &&
        !authStore.expiresIn &&
        !authStore.expiresAt &&
        !authStore.user?.fullName &&
        !authStore.user?.email
    ) {
        authStore.authByCookies({
            accessToken: accessToken.value,
            refreshToken: refreshToken.value,
            expiresIn: expiresIn.value,
            expiresAt: expiresAt.value,
            user: {
                fullName: userFullName.value,
                email: userEmail.value,
            },
        } as AuthByCookiesResponse);
    }

    if (to.path === RoutePaths.Login && auth) {
        return navigateTo(RoutePaths.Dashboard);
    }

    if (
        (to.path === RoutePaths.Dashboard ||
            to.path === RoutePaths.DashboardAnalytics ||
            to.path === RoutePaths.DashboardKnowledge ||
            to.path === RoutePaths.DashboardConsents ||
            to.path === RoutePaths.DashboardBilling ||
            to.path === RoutePaths.DashboardChats ||
            to.path === RoutePaths.DashboardQualityControl ||
            to.path === RoutePaths.DashboardCalls ||
            to.path === RoutePaths.DashboardConcierge
        ) && !auth) {
        return navigateTo(RoutePaths.Login);
    }
});
