import validation from "./validation.js";
import { onHandleSubmit } from "./iu.js";
import { cargarActas } from "./socket_cliente.js";

cargarActas();

const actaForm = document.querySelector("#actaForm");
validation();
actaForm.addEventListener("submit", onHandleSubmit);
