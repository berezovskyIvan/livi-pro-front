export function formatDateManual(date: Date): string {
    const year = date.getFullYear();
    const dayWithMonth = new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'long' }).format(date);
    const minutesWithHours = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit' }).format(date);

    return `${dayWithMonth} ${year}, ${minutesWithHours}`;
}
