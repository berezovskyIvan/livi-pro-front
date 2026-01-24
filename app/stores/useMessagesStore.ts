import { defineStore } from 'pinia';

import { messagesApi } from '#shared/api/messages';
import type { ApiMessagesListResponse } from '#shared/api/messages/types';
import type { PaginationPayload } from '#shared/api/shared/types';

export const useMessagesStore = defineStore('messages', {
    actions: {
        listByDialogId(dialogId: string, paginationPayload: PaginationPayload): Promise<ApiMessagesListResponse> {
            return messagesApi.listByDialogId(dialogId, paginationPayload);
        },
    },
});
