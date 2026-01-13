import type { ApiMessagesListResponse } from '#shared/api/messages/types';
import type { PaginationPayload } from '#shared/api/shared/types';

const apiHost = 'https://api-dev.livi-pro.ru';

export const messagesApi = {
    listByDialogId(dialogId: string, paginationPayload: PaginationPayload): Promise<ApiMessagesListResponse> {
        return $fetch(`${apiHost}/v1/messages/${dialogId}?page=${paginationPayload.page}&perPage=${paginationPayload.perPage}`);
    },
};
