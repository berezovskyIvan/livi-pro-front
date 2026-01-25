import type { ApiConsentsIdPayload, ApiConsentsListResponse } from '#shared/api/consents/types';
import type { PaginationPayload } from '#shared/api/shared/types';

import type { ApiEmptyResponse } from 'business-modules/systemic/types';

export const consentsApi = {
    list(payload: PaginationPayload): Promise<ApiConsentsListResponse> {
        return $fetch(`/api/consents/list?page=${payload.page}&perPage=${payload.perPage}`);
    },
    withdraw(payload: ApiConsentsIdPayload): Promise<ApiEmptyResponse> {
        return $fetch(`/api/consents/withdraw/${payload.consentId}`, { method: 'PATCH' });
    },
};
