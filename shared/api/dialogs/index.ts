import type { ApiDialogsListResponse } from '#shared/api/dialogs/types';
import type { PaginationPayload } from '#shared/api/shared/types';

const apiHost = 'https://api-dev.livi-pro.ru';

export const dialogsApi = {
    list(payload: PaginationPayload): Promise<ApiDialogsListResponse> {
        return $fetch(`${apiHost}/v1/dialogs/list?page=${payload.page}&perPage=${payload.perPage}`);
    },
};
