import type { ApiDialogsListResponse } from '#shared/api/dialogs/types';

import { HttpStatus } from 'business-modules/systemic/enums';

import { $apiBaseInternal } from '../../utils/api';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    try {
        return await $apiBaseInternal<ApiDialogsListResponse>('/v1/dialogs/list', {
            params: query,
        });
    } catch {
        throw createError({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Failed to fetch dialogs list',
        });
    }
});
