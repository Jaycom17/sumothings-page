/**
 * Agrega separadores de miles a un número.
 * 
 * @param num El número al que se le agregarán los separadores de miles.
 * @returns El número con los separadores de miles agregados.
 */
export function addThousandSeparators(num: string | number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}