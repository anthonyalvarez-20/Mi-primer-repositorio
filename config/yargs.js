const { describe, number } = require('yargs')

const argv = require ('yargs')
            .option('b', {
                alias:'base',
                type:'number',
                demandOption: true,//esto nos ayuda a que si no le damos un valor a la base nos bote error
                describe: 'Es la base del numero que se va a multiplicar'
            })
            .check((argv,option) =>{//esto nos ayuda a poner condiciones a nuestra aplicacion
                if(isNaN(argv.b)){//este if es por si ingresamos letra en vez de numero
                    throw 'Debe ingresar un numero'
                }
                return true
            })

            .option('l',{
                alias:'listar',
                type:'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })

            .option('h',{
                alias:'hasta',
                type: 'number',
                default:10,
                describe:'indica hasta que numero quiere que se multiplique'
            })
            .argv

            module.exports = argv