import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    actaVerificacion: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
    hora: {
      type: Date,
      required: true,
    },
    lugarVerificacion: {      
      type: String,
      required: true,
    },

    actaIncautacion: {      
      type: String,
      default: "",
      required: true,
    },

    expediente: {      
      type: String,
      default: "",
      required: true,
    },

    solicitante: {      
      type: String,
      default: "",
      required: true,
    },

    otros: {      
      type: String,
      default: "",
      required: true,
    },

    nameConcurrente1: {      
      type: String,
      default: "",
      required: true,
    },

    DNIConcurrente1: {      
      type: String,
      default: "",
      required: true,
    },

    calidadConcurrente1: {      
      type: String,
      default: "",
      required: true,
    },

    nameConcurrente2: {      
      type: String,
      default: "",
      required: true,
    },

    DNIConcurrente2: {      
      type: String,
      default: "",
      required: true,
    },

    calidadConcurrente2: {      
      type: String,
      default: "",
      required: true,
    },

    nameConcurrente3: {      
      type: String,
      default: "",
      required: true,
    },

    DNIConcurrente3: {      
      type: String,
      default: "",
      required: true,
    },

    CalidadConcurrente3: {      
      type: String,
      default: "",
      required: true,
    },


    descripcion: {
      type: String,
      required: true,
    },

    fotografia: {
      type: Boolean,
      required: true,
    },

    cantidadMuestra: {
      type: String,
      required: true,
    },

    muestra: {
      type: Boolean,
      required: true,
    }

  },
  {
    timestamps: true,
  }
);

export default model("Acta", schema);
