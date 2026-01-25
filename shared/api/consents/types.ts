import type { PaginationWrapperResponse } from '#shared/api/shared/types';

export interface ApiConsentResponse {
    consent: boolean;
    createdAt?: Date;
    id: number;
    textId: number;
    userId: string;
}

export interface ApiConsentsListResponse extends PaginationWrapperResponse<ApiConsentResponse> {
    items: ApiConsentResponse[];
}

export interface ApiConsentsIdPayload {
    consentId: number;
}
