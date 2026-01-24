export function formatDateManual(date: Date): string {
    const year = date.getFullYear();
    const dayWithMonth = date.toLocaleString('ru-RU', { day: "numeric", month: 'long' })
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${dayWithMonth} ${year}, ${hours}:${minutes}`;
}