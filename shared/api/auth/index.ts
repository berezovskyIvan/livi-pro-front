import type { ApiEmptyResponse } from 'business-modules/systemic/types';

import type { ApiAuthPayload, ApiAuthResponse, ApiRegisterPayload, ApiRegisterResponse } from './types';

const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YW1wcWhnZXN0bXB2YnVwYndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxMjQyMjQsImV4cCI6MjA3NDcwMDIyNH0.AvU1ez5_pkl5tyAxJfrKnEGtRUSeYEadFFfANp2tyHM';

export const authApi = {
    auth(payload: ApiAuthPayload): Promise<ApiAuthResponse> {
        return $fetch('https://vxampqhgestmpvbupbwb.supabase.co/auth/v1/token?grant_type=password', {
            method: 'POST',
            headers: {
                Apikey: supabaseApiKey,
                Authorization: `Bearer ${supabaseApiKey}`,
            },
            body: JSON.stringify({
                gotrue_meta_security: {},
                email: payload.email,
                password: payload.password,
            }),
        });
    },

    register(payload: ApiRegisterPayload): Promise<ApiRegisterResponse> {
        return $fetch('https://vxampqhgestmpvbupbwb.supabase.co/auth/v1/signup?redirect_to=https%3A%2F%2Fdev.livi-pro.ru%2F', {
            method: 'POST',
            headers: {
                Apikey: supabaseApiKey,
                Authorization: `Bearer ${supabaseApiKey}`,
            },
            body: JSON.stringify({
                code_challenge: null,
                code_challenge_method: null,
                gotrue_meta_security: {},
                email: payload.email,
                password: payload.password,
                data: {
                    clinic_name: payload.data.clinicName,
                    full_name: payload.data.fullName,
                    phone: payload.data.phone,
                    role: payload.data.role,
                },
            }),
        });
    },

    resetPassword(email: string): Promise<ApiEmptyResponse> {
        return $fetch('https://vxampqhgestmpvbupbwb.supabase.co/auth/v1/recover?redirect_to=https%3A%2F%2Fdev.livi-pro.ru%2Freset-password', {
            method: 'POST',
            headers: {
                Apikey: supabaseApiKey,
                Authorization: `Bearer ${supabaseApiKey}`,
            },
            body: JSON.stringify({
                code_challenge: null,
                code_challenge_method: null,
                gotrue_meta_security: {},
                email,
            }),
        });
    },
};
