console.clear()//sirve para limpar la consola cada vez que se ejecuta


//importar un archivo
const {crearArchivo} = require('./helpers/archivo-promesa');

const colors = require('colors');

const argv = require('./config/yargs')




//const numero = 3 
console.log(argv)



crearArchivo(argv.b,argv.l,argv.h)
.then(nombrearchivo =>console.log(nombrearchivo.rainbow, 'creado'.rainbow))
.catch(err=>console.log(err))
