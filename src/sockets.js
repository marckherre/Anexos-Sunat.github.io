import Acta from "./models/acta";

export default (io) => {
  io.on("connection", (socket) => {
    const emitActas = async () => {
      const actas = await Acta.find();
      io.emit('mostraractas', actas)
    };
    emitActas();

    socket.on("cliente:newacta", async(data) => {
       const newActa = new Acta(data)
       const savedActa = await newActa.save()
       console.log(savedActa);
    });
  });
};
 