import type { PaginationWrapperResponse } from '#shared/api/shared/types';
import type { ApiUserResponse } from '#shared/api/user/types';

export interface ApiMessageResponse {
    dialogId: string;
    id: string;
    createdAt?: string;
    senderRole: string;
    direction: string;
    providerRaw?: string;
    bodyRaw?: string;
    bodyMain?: string;
    hasFooter: boolean;
    footerRaw?: string;
    footerParsed?: string;
    generatedAi: boolean;
    user?: ApiUserResponse;
}

export interface ApiMessagesListResponse extends PaginationWrapperResponse<ApiMessageResponse> {
    items: ApiMessageResponse[];
}
