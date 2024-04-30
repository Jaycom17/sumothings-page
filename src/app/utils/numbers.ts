export function addThousandSeparators(num: string | number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}