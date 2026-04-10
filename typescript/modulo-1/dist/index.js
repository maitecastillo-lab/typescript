"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
// Imaginemos que son temperaturas
const temperaturas = [22, 25, 23, 100, 24]; // el 100 es un error del sensor ya que es mayor a 40.
const limiteMaximo = 40;
console.log("Datos originales:", temperaturas);
// Probamos Filtrar Atípicos
const datosLimpios = (0, math_utils_1.filtrarAtipicos)(temperaturas, limiteMaximo); // filtramos los datos atípicos ( o sea el 100 se eliminara por ser mayor a 40)
console.log("Datos sin errores (filtrados):", datosLimpios);
// Probamos la Media
const media = (0, math_utils_1.calcularMedia)(datosLimpios);
console.log(`La media es: ${media}`);
// Probamos la Mediana
const mediana = (0, math_utils_1.calcularMediana)(datosLimpios);
console.log(` La mediana es: ${mediana}`);
// --- PRUEBA DE CASO VACIO ---
console.log("Probando array vacío:", (0, math_utils_1.calcularMedia)([]));
