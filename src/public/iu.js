import { guardarDatosActa } from "./socket_cliente.js";

const checkIncautacion= document.querySelector('#checkIncautacion')
const checkInmovilizacion = document.querySelector('#checkInmovilizacion')
const checkFotografia = document.querySelector("#checkFotografia")
const checkMuestra = document.querySelector("#checkMuestra")


export const onHandleSubmit = (e) => {
  e.preventDefault();
  console.log(checkInmovilizacion);
  guardarDatosActa(
    actaForm["inputActa"].value,
    actaForm["inputDate"].value,
    actaForm["inputTime"].value,
    actaForm["inputPlace"].value,
    checkInmovilizacion.checked,
    checkIncautacion.checked,
    actaForm["inputInmovilizacion"].value,
    actaForm["inputExpediente"].value,
    actaForm["inputNomSolicitante"].value,
    actaForm["inputOtros"].value,
    actaForm["inputNamConcurrente1"].value,
    actaForm["inputDocConcurrente1"].value,
    actaForm["inputCalidadConcurrente1"].value,
    actaForm["inputNamConcurrente2"].value,
    actaForm["inputDocConcurrente2"].value,
    actaForm["inputCalidadConcurrente2"].value,
    actaForm["inputNamConcurrente3"].value, 
    actaForm["inputDocConcurrente3"].value,
    actaForm["inputCalidadConcurrente3"].value, 
    actaForm["descripcionDiligencia"].value,
    checkFotografia.checked,
    actaForm["inputMuestra"].value,
    checkMuestra.checked
  );

};

/* const actaVerificacion= document.querySelector("#inputActa")
const fecha= document.querySelector("#inputDate")
const hora= document.querySelector("#inputTime")
const lugarVerificacion= document.querySelector("#inputPlace")
const actaInmovilizacion= document.querySelector("#checkInmovilizacion")
const actaIncautacion= document.querySelector("#checkIncautacion")
const numeroInmovilizacion= document.querySelector("#inputInmovilizacion")
const expediente= document.querySelector("#inputExpediente")
const solicitante= document.querySelector("#inputNomSolicitante")
const otros= document.querySelector("#inputOtros")
const nameConcurrente1= document.querySelector("#inputNamConcurrente1")
const DNIConcurrente1= document.querySelector("#inputDocConcurrente1")
const calidadConcurrente1= document.querySelector("#inputCalidadConcurrente1")
const nameConcurrente2= document.querySelector("#inputNamConcurrente2")
const DNIConcurrente2= document.querySelector("#inputDocConcurrente2")
const calidadConcurrente2= document.querySelector("#inputCalidadConcurrente2")
const nameConcurrente3= document.querySelector("#inputNamConcurrente3")
const DNIConcurrente3= document.querySelector("#inputDocConcurrente3")
const calidadConcurrente3= document.querySelector("#inputCalidadConcurrente3")
const descripcion= document.querySelector("#descripcionDiligencia")
const fotografia= document.querySelector("#checkFotografia")
const cantidadMuestra= document.querySelector("#inputMuestra")
const muestra= document.querySelector("#checkMuestra")
 */
