# TYPESCRIPT
Este repositorio contiene el desarrollo de los **Módulos 1 y 2** de la práctica de TypeScript.
El objetivo principal ha sido migrar del tipado dinámico de JavaScript a un sistema de tipado estático y estricto,
garantizando la robustez y escalabilidad del código mediante análisis estático.


## Estructura del Proyecto
Este repositorio se organiza de la siguiente manera:

* **`modulo-1/`**: Lógica pura y utilidades estadísticas.
* **`modulo-2/`**: Arquitectura de acceso a datos, modelado complejo y programación genérica.
* **`docs/`**: Documentación técnica sobre la arquitectura y decisiones de diseño.

## Tecnologías y Configuración

El entorno se ha configurado para maximizar la detección temprana de errores:
* **Compilador**: TypeScript 5.x con configuración estricta (`strict: true`).
* **Ejecución**: Uso de `tsx` para desarrollo y `tsc` para transpilación a ECMAScript 2022.
* **Arquitectura**: Código fuente en `src/` y salida de compilación en `dist/`.

## Laboratorios Realizados

### Módulo 1: Inicialización y Lógica Pura
Desarrollo de un módulo matemático (`math-utils.ts`):
* **Funciones estadísticas**: Implementación de `calcularMedia`, `calcularMediana` y `filtrarAtipicos`.
* **Manejo de casos límite**: Uso de tipos de unión (`number | null`) para gestionar arrays vacíos, evitando errores en tiempo de ejecución (runtime).
* **Análisis Estático**: Verificación de contratos de software mediante firmas de funciones rigurosas.

### Módulo 2: Modelado de Datos y Genéricos
Implementación de un sistema de gestión universitario con patrones avanzados:
* **Entidades de Dominio**: Uso de `interface` con propiedades `readonly` para garantizar la inmutabilidad de identificadores (IDs).
* **Uniones Discriminadas**: Creación del tipo `EstadoMatricula` (`ACTIVA`, `SUSPENDIDA`, `FINALIZADA`). Este patrón permite un estrechamiento de tipos (narrowing) 100% seguro.
* **Servicio Genérico**: Diseño de un `api-client.ts` con la función genérica `obtenerRecurso<T>`, devolviendo promesas fuertemente tipadas bajo el contrato `RespuestaAPI<T>`.
* **Análisis Exhaustivo**: Implementación de la función `generarReporte` preparada para escalabilidad mediante el chequeo de exhaustividad.


## Verificación de Tipado

Para garantizar la integridad del código, el proyecto ha sido validado con:
```bash
npx tsc --noEmit
