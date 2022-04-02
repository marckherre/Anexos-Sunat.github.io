import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    act_verificacion: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    lugar_verificacion: {      
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model("Acta", schema);
