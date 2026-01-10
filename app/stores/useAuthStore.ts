import { defineStore } from 'pinia';

import { authApi } from '#shared/api/auth';
import type { ApiAuthPayload, ApiAuthResponse, ApiRegisterPayload, ApiRegisterResponse } from '#shared/api/auth/types';

import type { ApiEmptyResponse } from 'business-modules/systemic/types';

interface State {
    accessToken: string | undefined;
    refreshToken: string | undefined;
    expiresIn: number | undefined;
    expiresAt: number | undefined;
    user?: {
        fullName: string;
        email: string;
    };
}

export type AuthByCookiesResponse = Required<Pick<State, 'accessToken' | 'refreshToken' | 'expiresIn' | 'expiresAt' | 'user'>>;

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        accessToken: undefined,
        refreshToken: undefined,
        expiresIn: undefined,
        expiresAt: undefined,
        user: undefined,
    }),

    actions: {
        SET_AUTH(response: ApiAuthResponse): void {
            this.accessToken = response.access_token;
            this.refreshToken = response.refresh_token;
            this.expiresIn = response.expires_in;
            this.expiresAt = response.expires_at;
            this.user = {
                fullName: response.user.user_metadata.full_name,
                email: response.user.email,
            };
        },
        SET_AUTH_BY_COOKIES(response: AuthByCookiesResponse): void {
            this.accessToken = response.accessToken;
            this.refreshToken = response.refreshToken;
            this.expiresIn = response.expiresIn;
            this.expiresAt = response.expiresAt;
            this.user = {
                fullName: response.user.fullName,
                email: response.user.email,
            };
        },
        REMOVE_AUTH(): void {
            this.accessToken = undefined;
            this.refreshToken = undefined;
            this.expiresIn = undefined;
            this.expiresAt = undefined;
        },

        async auth(payload: ApiAuthPayload): Promise<ApiAuthResponse> {
            const res = await authApi.auth(payload);
            this.SET_AUTH(res);
            return res;
        },

        authByCookies(response: AuthByCookiesResponse): void {
            this.SET_AUTH_BY_COOKIES(response);
        },

        register(payload: ApiRegisterPayload): Promise<ApiRegisterResponse> {
            return authApi.register(payload);
        },

        resetPassword(email: string): Promise<ApiEmptyResponse> {
            return authApi.resetPassword(email);
        },

        logout(): void {
            const accessToken = useCookie<string | undefined>('accessToken');
            const refreshToken = useCookie<string | undefined>('refreshToken');
            const expiresIn = useCookie<number | undefined>('expiresIn');
            const expiresAt = useCookie<number | undefined>('expiresAt');
            const userFullName = useCookie<string | undefined>('userFullName');
            const userEmail = useCookie<string | undefined>('userEmail');

            accessToken.value = undefined;
            refreshToken.value = undefined;
            expiresIn.value = undefined;
            expiresAt.value = undefined;
            userFullName.value = undefined;
            userEmail.value = undefined;

            this.REMOVE_AUTH();

            window.location.href = '/';
        },
    },
});
