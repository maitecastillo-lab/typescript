import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils';

// Imaginemos que son temperaturas
const temperaturas: number[] = [22, 25, 23, 100, 24]; // el 100 es un error del sensor ya que es mayor a 40.
const limiteMaximo = 40;

console.log("Datos originales:", temperaturas);

// Probamos Filtrar Atípicos
const datosLimpios = filtrarAtipicos(temperaturas, limiteMaximo); // filtramos los datos atípicos ( o sea el 100 se eliminara por ser mayor a 40)
console.log("Datos sin errores (filtrados):", datosLimpios);

// Probamos la Media
const media = calcularMedia(datosLimpios); 
console.log(`La media es: ${media}`);

// Probamos la Mediana
const mediana = calcularMediana(datosLimpios);
console.log(` La mediana es: ${mediana}`);

// --- PRUEBA DE CASO VACIO ---
console.log("Probando array vacío:", calcularMedia([]));