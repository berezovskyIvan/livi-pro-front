import type { PaginationWrapperResponse } from '#shared/api/shared/types';
import type { ApiUserResponse } from '#shared/api/user/types';

export interface ApiConsentResponse {
    consent: boolean;
    createdAt?: Date;
    id: number;
    textId: number;
    user?: ApiUserResponse;
}

export interface ApiConsentsListResponse extends PaginationWrapperResponse<ApiConsentResponse> {
    items: ApiConsentResponse[];
}

export interface ApiConsentsIdPayload {
    consentId: number;
}
