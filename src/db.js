//TODO aqui el codigo para la coneccion con la base de datos con mongodb

import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(
      "mongodb+srv://juacko:las4particulas@cluster0.ad40i.mongodb.net/actadb?retryWrites=true&w=majority"
    );
    console.log("connected to DB");
  } catch (error) {
    console.error(error);
  }
};
