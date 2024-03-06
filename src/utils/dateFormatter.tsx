export function FormatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function FormatDateRange(from: string, to?: string) {
    const fromDate = FormatDate(from);

    if (!to) {
        return fromDate;
    }

    const toDate = FormatDate(to);

    return `${fromDate} to ${toDate}`;
}
