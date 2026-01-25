import type { ApiMessagesListResponse } from '#shared/api/messages/types';
import type { PaginationPayload } from '#shared/api/shared/types';

export const messagesApi = {
    listByDialogId(dialogId: string, paginationPayload: PaginationPayload): Promise<ApiMessagesListResponse> {
        return $fetch(`/api/messages/${dialogId}?page=${paginationPayload.page}&perPage=${paginationPayload.perPage}`);
    },
};
