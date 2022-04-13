const socket = io();

export const cargarActas = () => {
  socket.on("mostraractas", (data) => {
    console.log(data); //para que las actas esten dispobibles y filtrarlas
  });
};

export const guardarDatosActa = (
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
) => {
  socket.emit("cliente:newacta", {
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
    muestra,
  });
};

export const actualizarDatosActa = "";
export const obtenerDatosActa = "";
