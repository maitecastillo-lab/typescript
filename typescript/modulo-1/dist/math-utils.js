"use strict";
//laboratorio 1:
//calcular media
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
// 1. Calcular Media
function calcularMedia(datos) {
    // array vacío
    if (datos.length === 0)
        return null;
    //en vez de hacer un for loop, se usa reduce para sumar los elementos del array.
    //esto se hace con el acc que es el acumulador y val que es el valor actual.
    //lo que dice el acc esto es todo el valor que acumule, sumale al valor actual.
    const suma = datos.reduce((acc, val) => acc + val, 0);
    //se divide la suma por la cantidad de elementos para obtener la media.
    return suma / datos.length;
}
// 2. Calcular Mediana
function calcularMediana(datos) {
    // verifica si el array tiene elementos para evitar dividir por cero.
    if (datos.length === 0)
        //si esta vacio devuelve null.
        return null;
    //se ordena el array con la copia que es (...datos) para poder calcular la mediana.
    //se usa el sort para ordenar el array y se usa el a - b para ordenar de menor a mayor.
    const ordenados = [...datos].sort((a, b) => a - b);
    //se calcula la mitad del array para poder obtener la mediana.
    const mitad = Math.floor(ordenados.length / 2);
    //si el array es par, se calcula la mediana con los dos elementos centrales.
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    //si el array es impar, se calcula la mediana con el elemento central.
    return ordenados[mitad];
}
// 3. Filtrar Atípicos
function filtrarAtipicos(datos, limite) {
    // Devuelve solo los números que no superan el límite indicado
    return datos.filter(valor => valor <= limite);
}
