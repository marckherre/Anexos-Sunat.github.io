//TODO aqui el codigo para la coneccion con la base de datos con mongodb

import { connect } from "mongoose";
import {MONGODB_URI} from './config.js'

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI);
    console.log("connected to DB");
  } catch (error) {
    console.error(error);
  }
};
