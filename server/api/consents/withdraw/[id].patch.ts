import { HttpStatus } from 'business-modules/systemic/enums';
import type { ApiEmptyResponse } from 'business-modules/systemic/types';

import { $apiBaseInternal } from '../../../utils/api';

export default defineEventHandler(async (event) => {
    const consentId = getRouterParam(event, 'id');

    if (!consentId) {
        throw createError({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Consent id is required',
        });
    }

    try {
        return await $apiBaseInternal<ApiEmptyResponse>(`/v1/consents/withdraw/${consentId}`, {
            method: 'PATCH',
        });
    } catch {
        throw createError({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Failed to update consent by id',
        });
    }
});
