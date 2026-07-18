export const plural = (
    value: number,
    one: string,
    few: string,
    many: string
) => {
    const n = Math.abs(value) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return many;
    if (n1 === 1) return one;
    if (n1 >= 2 && n1 <= 4) return few;

    return many;
};