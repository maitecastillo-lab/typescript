//interfaz de la api que lo hacemos primero para que typescript sepa como se va a comportar la api.
export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T; 
    mensaje: string; 
}

// 'async' indica que esta función no es instantánea (devuelve una Promesa).
// <T> aquí permite que el programador elija qué tipo de datos espera recibir.
export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    
    console.log(`[SERVICIO] Accediendo a: ${endpoint}`);

    return new Promise((resolve) => { //resolve es una función que se ejecuta cuando la promesa se resuelve.
        setTimeout(() => {
            
            const datosSimulados = {} as T; 
            const respuesta: RespuestaAPI<T> = { //respuesta es un objeto que cumple la interfaz RespuestaAPI
                codigoEstado: 200,
                exito: true,
                datos: datosSimulados,
                mensaje: "Datos recuperados correctamente de la simulación."
            };

            resolve(respuesta);
        }, 1000);
    });
}