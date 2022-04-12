import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    actaVerificacion: {
      type: String,
      
    },
    fecha: {
      type: Date,
      
    },
    hora: {
      type: String,
      
    },
    lugarVerificacion: {      
      type: String,
      
    },
    actaInmovilizacion: {      
      type: Boolean,
      
    },   
    actaIncautacion: {      
      type: Boolean,
      
    },

    actaIncautacion: {      
      type: String,
      
      
    },

    expediente: {      
      type: String,
      
      
    },

    solicitante: {      
      type: String,
      
      
    },

    otros: {      
      type: String,
      
      
    },

    nameConcurrente1: {      
      type: String,
      
      
    },

    DNIConcurrente1: {      
      type: String,
      
      
    },

    calidadConcurrente1: {      
      type: String,
      
      
    },

    nameConcurrente2: {      
      type: String,
      
      
    },

    DNIConcurrente2: {      
      type: String,
      
      
    },

    calidadConcurrente2: {      
      type: String,
      
      
    },

    nameConcurrente3: {      
      type: String,
      
      
    },

    DNIConcurrente3: {      
      type: String,
      
      
    },

    CalidadConcurrente3: {      
      type: String,
      
      
    },


    descripcion: {
      type: String,
      
    },

    fotografia: {
      type: Boolean,
      
    },

    cantidadMuestra: {
      type: String,
      
    },

    muestra: {
      type: Boolean,
      
    }

  },
  {
    timestamps: true,
  }
);

export default model("Acta", schema);
