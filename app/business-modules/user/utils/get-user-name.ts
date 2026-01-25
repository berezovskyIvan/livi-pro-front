import type { ApiUserResponse } from '#shared/api/user/types';

export function getUserName(firstName: ApiUserResponse['firstName'], middleName: ApiUserResponse['middleName'], lastName: ApiUserResponse['lastName']): string {
    if (firstName || middleName || lastName) {
        let userName = '';

        if (firstName) {
            userName = firstName;
        }

        if (middleName) {
            if (userName) {
                userName += ' ';
            }
            userName += middleName;
        }

        if (lastName) {
            if (userName) {
                userName += ' ';
            }
            userName += lastName;
        }

        return userName;
    }

    return 'User';
}
