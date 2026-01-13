import { defineStore } from 'pinia';

import { dialogsApi } from '#shared/api/dialogs';
import type { ApiDialogResponse, ApiDialogsListResponse } from '#shared/api/dialogs/types';
import type { PaginationPayload } from '#shared/api/shared/types';

interface State {
    totalItems: number | undefined;
    currentPage: number | undefined;
    totalPages: number | undefined;
    items: ApiDialogResponse[] | undefined;
}

export const useDialogsStore = defineStore('dialogs', {
    state: (): State => ({
        totalItems: undefined,
        currentPage: undefined,
        totalPages: undefined,
        items: undefined,
    }),

    actions: {
        SET_LIST(response: ApiDialogsListResponse): void {
            this.totalItems = response.totalItems;
            this.currentPage = response.currentPage;
            this.totalPages = response.totalPages;

            if (this.items) {
                this.items.push(...response.items);
            } else {
                this.items = response.items;
            }
        },
        async list(payload: PaginationPayload): Promise<ApiDialogsListResponse> {
            const res = await dialogsApi.list(payload);
            this.SET_LIST(res);
            return res;
        },
    },
});
