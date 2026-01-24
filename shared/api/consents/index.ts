import type { ApiConsentsListResponse } from '#shared/api/consents/types';
import type { PaginationPayload } from '#shared/api/shared/types';

const apiHost = 'https://api-dev.livi-pro.ru';

export const consentsApi = {
    list(payload: PaginationPayload): Promise<ApiConsentsListResponse> {
        return $fetch(`${apiHost}/v1/consents/list?page=${payload.page}&perPage=${payload.perPage}`);
    },
};
