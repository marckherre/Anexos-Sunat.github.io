const socket = io();

export const cargarActas = () => {
  socket.on("mostraractas", (data) => {
    console.log(data); //para que las actas esten dispobibles y filtrarlas
  });
};

export const guardarDatosActa = (
  inputActa,
  inputDate,
  inputTime,
  inputPlace,
  checkInmovilizacion,
  checkIncautacion,
  inputInmovilizacion,
  inputExpediente,
  inputNomSolicitante,
  inputOtros,
  inputNamConcurrente1,
  inputDocConcurrente1,
  inputCalidadConcurrente1,
  inputNamConcurrente2,
  inputDocConcurrente2,
  inputCalidadConcurrente2,
  inputNamConcurrente3,
  inputDocConcurrente3,
  inputCalidadConcurrente3,
  descripcionDiligencia,
  checkFotografia,
  inputMuestra,
  checkMuestra
) => {
  socket.emit("cliente:newacta", {
    inputActa,
    inputDate,
    inputTime,
    inputPlace,
    checkInmovilizacion,
    checkIncautacion,
    inputInmovilizacion,
    inputExpediente,
    inputNomSolicitante,
    inputOtros,
    inputNamConcurrente1,
    inputDocConcurrente1,
    inputCalidadConcurrente1,
    inputNamConcurrente2,
    inputDocConcurrente2,
    inputCalidadConcurrente2,
    inputNamConcurrente3,
    inputDocConcurrente3,
    inputCalidadConcurrente3,
    descripcionDiligencia,
    checkFotografia,
    inputMuestra,
    checkMuestra
  });
};

export const actualizarDatosActa = "";
export const obtenerDatosActa = "";
