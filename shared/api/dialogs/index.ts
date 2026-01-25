import type { ApiDialogsListResponse } from '#shared/api/dialogs/types';
import type { PaginationPayload } from '#shared/api/shared/types';

export const dialogsApi = {
    list(payload: PaginationPayload): Promise<ApiDialogsListResponse> {
        return $fetch(`/api/dialogs/list?page=${payload.page}&perPage=${payload.perPage}`);
    },
};
