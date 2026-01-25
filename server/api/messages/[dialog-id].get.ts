import type { ApiMessagesListResponse } from '#shared/api/messages/types';

import { HttpStatus } from 'business-modules/systemic/enums';

import { $apiBaseInternal } from '../../utils/api';

export default defineEventHandler(async (event) => {
    const dialogId = getRouterParam(event, 'dialog-id');

    if (!dialogId) {
        throw createError({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Dialog id is required',
        });
    }

    const query = getQuery(event);

    try {
        return await $apiBaseInternal<ApiMessagesListResponse>(`/v1/messages/${dialogId}`, {
            params: query,
        });
    } catch {
        throw createError({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Failed to fetch messages list by dialog id',
        });
    }
});
