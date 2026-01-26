function normalize(phoneNumber: string): string {
    return phoneNumber.replace(
        /^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        '$1$2$3',
    );
}

export function formatPhone(phoneNumber: string, formatString: string): string {
    const normalizedPhone = normalize(phoneNumber);
    for (let i = 0, l = phoneNumber.length; i < l; i++) {
        if (normalizedPhone[i]) {
            formatString = formatString.replace('N', normalizedPhone[i]!);
        }
    }

    return `${phoneNumber.substring(0, 2)} ${formatString}`;
}
