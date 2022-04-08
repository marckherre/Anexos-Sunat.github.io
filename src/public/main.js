import validation from "./validation.js";
import {} from "./iu.js";
import {} from "./socket_cliente.js";

io();
validation();

const actaForm = document.querySelector("#actaForm");
actaForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log(
    actaForm['inputActa'].value,
    actaForm['inputDate'].value,
    actaForm['inputTime'].value,
    actaForm['inputPlace'].value,
    actaForm['checkInmovilizacion'].value,
    actaForm['checkIncautacion'].value,
    actaForm['inputInmovilizacion'].value,
    actaForm['inputExpediente'].value,
    actaForm['inputNomSolicitante'].value,
    actaForm['inputOtros'].value,
    actaForm['inputNamConcurrente1'].value,
    actaForm['inputDocConcurrente1'].value,
    actaForm['inputCalidadConcurrente1'].value,
    actaForm['inputNamConcurrente2'].value,
    actaForm['inputDocConcurrente2'].value,
    actaForm['inputCalidadConcurrente2'].value,
    actaForm['inputNamConcurrente3'].value,
    actaForm['inputDocConcurrente3'].value,
    actaForm['inputCalidadConcurrente3'].value,
    actaForm['descripcionDiligencia'].value,
    actaForm['checkFotografia'].value,
    actaForm['inputMuestra'].value,
    actaForm['checkMuestra'].value,
  )}
)