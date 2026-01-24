import { defineStore } from 'pinia';

import { consentsApi } from '#shared/api/consents';
import type { ApiConsentResponse, ApiConsentsListResponse } from '#shared/api/consents/types';
import type { PaginationPayload } from '#shared/api/shared/types';

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
    },
});
