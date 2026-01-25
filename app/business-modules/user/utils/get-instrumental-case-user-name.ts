import { inclineFirstname, inclineLastname, inclineMiddlename } from 'lvovich';

import type { ApiUserResponse } from '#shared/api/user/types';

export function getInstrumentalCaseUserName(firstName: ApiUserResponse['firstName'], middleName: ApiUserResponse['middleName'], lastName: ApiUserResponse['lastName']): string {
    if (firstName || middleName || lastName) {
        let userName = '';

        if (firstName) {
            userName = inclineFirstname(firstName, 'instrumental');
        }

        if (middleName) {
            if (userName) {
                userName += ' ';
            }
            userName += inclineMiddlename(middleName, 'instrumental');
        }

        if (lastName) {
            if (userName) {
                userName += ' ';
            }
            userName += inclineLastname(lastName, 'instrumental');
        }

        return userName;
    }

    return 'User';
}
