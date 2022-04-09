import validation from "./validation.js";
import {onHandleSubmit} from "./iu.js";
import {cargarActas} from "./socket_cliente.js";

cargarActas()
validation();

const actaForm = document.querySelector("#actaForm");
actaForm.addEventListener("submit", onHandleSubmit);
