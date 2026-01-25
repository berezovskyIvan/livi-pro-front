import type { ApiConsentsListResponse } from '#shared/api/consents/types';

import { HttpStatus } from 'business-modules/systemic/enums';

import { $apiBaseInternal } from '../../utils/api';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    try {
        return await $apiBaseInternal<ApiConsentsListResponse>('/v1/consents/list', {
            params: query,
        });
    } catch {
        throw createError({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Failed to fetch consents list',
        });
    }
});
