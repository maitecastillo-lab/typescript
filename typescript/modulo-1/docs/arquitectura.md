
# Objetivo
# El objetivo de este módulo fue implementar una librería de utilidades matemáticas 
(`math-utils.ts`) que sea predecible y segura, eliminando los errores comunes que
 ocurren en JavaScript.

#Se ha definido que todas las funciones reciban un array de tipo `number[]`. 
# ya que al usar TypeScript, obligamos al desarrollador a filtrar los datos 
antes de llamar a la función, evitando que entren strings o valores nulos
 que corrompan los cálculos estadísticos.

# las funciones devuelven un tipo de unión `number | null`, si el array está vacío,
 la función no intenta dividir por cero ni devuelve `NaN`; devuelve `null`. 
 Esto obliga a quien use la función a manejar ese estado de forma explícita.

Aunque TypeScript puede inferir el retorno de las funciones matemáticas, se han tipado 
explícitamente las firmas de las funciones:
`function calcularMedia(array: number[]): number | null`
Esto actúa como un contrato de software inmutable. El programador sabe exactamente 
qué esperar sin leer el cuerpo de la función.

## Verificación
# se utilizó `tsx` para pruebas rápidas en consola.
# para compilar, se configuró `tsc` para generar código en la carpeta `dist/`, 
asegurando que el JavaScript resultante sea compatible con `ES2022`.
# se verificó que el comando `npx tsc --noEmit` arroje **0 errores**, 
garantizando la integridad total de la lógica matemática.