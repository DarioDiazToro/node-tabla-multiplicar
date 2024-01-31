 const {crearArchivo} = require('./helpers/multiply');
 const colors = require('colors');
 const argv = require('./config/yargs');

 console.log( argv);
  console.log('base: yargs'.green ,argv.base);
 console.log('listar: yargs', argv.l);


 

 



// const [,,arg3 = "base=5"] = process.argv;

//  const [,base = 5] = arg3.split("=");

//  console.log(base);

console.clear();     

  crearArchivo(argv.b,argv.l,argv.h)
     .then((nombreArchivo)=>console.log(nombreArchivo.rainbow))
     .catch((error)=>console.log(error));

