import Acta from './models/acta'

export default (io) => {

  io.on('connection', () =>{
    console.log('nueva coneccion');
  }
  )

};
