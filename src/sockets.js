import Acta from "./models/acta";

export default (io) => {
  io.on("connection", (socket) => {
    const emitActas = async () => {
      const actas = await Acta.find();
      io.emit('mostraractas', actas)
    };
    emitActas();

    socket.on("cliente:newacta", data => {
    console.log(data);
    });
  });
};
 