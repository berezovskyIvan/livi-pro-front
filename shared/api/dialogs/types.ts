import type { ApiMessageResponse } from '#shared/api/messages/types';
import type { PaginationWrapperResponse } from '#shared/api/shared/types';

export interface ApiDialogResponse {
    channelId?: string;
    createdAt?: string;
    fsmState?: string;
    id: string;
    operatorId?: string;
    sessionKey?: string;
    updatedAt?: string;
    userId?: string;
    lastMessage: Pick<ApiMessageResponse, 'id' | 'createdAt' | 'bodyMain' | 'senderRole' | 'generatedAi'>;
}

export interface ApiDialogsListResponse extends PaginationWrapperResponse<ApiDialogResponse> {
    items: ApiDialogResponse[];
}
