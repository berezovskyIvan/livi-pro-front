import { defineStore } from 'pinia';

import { consentsApi } from '#shared/api/consents';
import type { ApiConsentResponse, ApiConsentsIdPayload, ApiConsentsListResponse } from '#shared/api/consents/types';
import type { PaginationPayload } from '#shared/api/shared/types';

import type { ApiEmptyResponse } from 'business-modules/systemic/types';

interface State {
    totalItems: number | undefined;
    currentPage: number | undefined;
    totalPages: number | undefined;
    items: ApiConsentResponse[] | undefined;
}

export const useConsentsStore = defineStore('consents', {
    state: (): State => ({
        totalItems: undefined,
        currentPage: undefined,
        totalPages: undefined,
        items: undefined,
    }),

    actions: {
        WITHDRAW_CONSENT(payload: ApiConsentsIdPayload): void {
            const consentIndex = this.items?.findIndex(consent => consent.id === payload.consentId);

            if (consentIndex && consentIndex > -1 && this.items && this.items[consentIndex]) {
                this.items[consentIndex].consent = false;
            }
        },
        SET_LIST(response: ApiConsentsListResponse): void {
            this.totalItems = response.totalItems;
            this.currentPage = response.currentPage;
            this.totalPages = response.totalPages;

            if (this.items) {
                this.items.push(...response.items);
            } else {
                this.items = response.items;
            }
        },
        async list(payload: PaginationPayload): Promise<ApiConsentsListResponse> {
            const res = await consentsApi.list(payload);
            this.SET_LIST(res);
            return res;
        },
        async withdraw(payload: ApiConsentsIdPayload): Promise<ApiEmptyResponse> {
            const res = await consentsApi.withdraw(payload);

            if (res.ok) {
                this.WITHDRAW_CONSENT(payload);
            }

            return res;
        },
    },
});
