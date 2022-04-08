const socket=io.connect()

export const guardarDatosActa = ()=>{socket.emmit("nuevaActaVerificacion",{
actaVerificacion,
fecha,
hora,
lugarVerificacion,
actaInmovilizacion,
actaIncautacion,
numeroInmovilizacion,
expediente,
solicitante,
otros,
nameConcurrente1,
DNIConcurrente1,
calidadConcurrente1,
nameConcurrente2,
DNIConcurrente2,
calidadConcurrente2,
nameConcurrente3,
DNIConcurrente3,
calidadConcurrente3,
descripcion,
fotografia,
cantidadMuestra,
muestra
})}
export const actualizarDatosActa=""
export const obtenerDatosActa=""
