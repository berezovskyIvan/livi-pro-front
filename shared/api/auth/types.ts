export interface ApiRegisterPayload extends ApiAuthPayload {
    data: {
        clinicName: string;
        fullName: string;
        phone: string;
        role: string;
    };
}

export interface ApiRegisterResponse {
    id: string;
    aud: string;
    role: string;
    email: string;
    phone: string;
    confirmation_sent_at: string;
    app_metadata: ApiUserAppMetadataResponse;
    user_metadata: ApiUserMetadataResponse;
    identities: ApiUserIdentity[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
}

export interface ApiAuthPayload {
    email: string;
    password: string;
}

export interface ApiUserAppMetadataResponse {
    provider: string;
    providers: string[];
}

export interface ApiUserMetadataResponse {
    clinic_name: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    phone: string;
    phone_verified: boolean;
    role: string;
    sub: string;
}

export interface ApiUserIdentity {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: {
        clinic_name: string;
        email: string;
        email_verified: boolean;
        full_name: string;
        phone: string;
        phone_verified: boolean;
        role: string;
        sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
}

export interface ApiUserResponse {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmation_sent_at: string;
    confirmed_at: string;
    last_sign_in_at: string;
    app_metadata: ApiUserAppMetadataResponse;
    user_metadata: ApiUserMetadataResponse;
    identities: ApiUserIdentity[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
}

export interface ApiAuthResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    user: ApiUserResponse;
    weak_password: null;
}
