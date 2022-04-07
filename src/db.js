//TODO aqui el codigo para la coneccion con la base de datos con mongodb

import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(
      "mongodb+srv://sunat:peruqatar2022@cluster0.rvm8u.mongodb.net/AnexoDB?retryWrites=true&w=majority"
    );
    console.log("connected to DB");
  } catch (error) {
    console.error(error);
  }
};
