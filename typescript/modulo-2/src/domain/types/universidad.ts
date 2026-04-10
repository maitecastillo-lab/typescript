//Interfaz de Asignatura
export interface Asignatura {
    readonly id: number;      
    nombre: string;
    creditos: number;
}

//Interfaz de Estudiante
export interface Estudiante {
    readonly id: string;      
    nombre: string;
    edad: number;
    email: string;
}

//paso 2: union descriminada: estado matricula
interface MatriculaActiva {
    tipo: "ACTIVA";           // Discriminante
    asignaturas: Asignatura[]; 
}

interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";       // Discriminante
    motivo: string;
}

interface MatriculaFinalizada {
    tipo: "FINALIZADA";       // Discriminante
    notaMedia: number;
}

// Unimos las tres en un solo tipo alias.
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

//generamos reporte

export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `En curso: ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `Suspendida por: ${estado.motivo}.`;
        case "FINALIZADA":
            return `Completada. Nota: ${estado.notaMedia}`;
        default:
            //Si añades un nuevo tipo a EstadoMatricula y no 
            //añades su 'case', esta línea dará error de compilación.
            
            const _comprobacion: never = estado;
            throw new Error(`Estado no manejado: ${_comprobacion}`);
    }
}