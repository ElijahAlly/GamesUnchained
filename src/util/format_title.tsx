export const formatTitle = (title: string, maxLength: number): string => {
    if (title.length > maxLength) {
        title = title.slice(0, maxLength-3) + '...';
    }

    return title;
}