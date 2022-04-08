//TODO este archivo nos va servir para configurar algunas variables para exportar en el resto de la aplicacion
import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI;
