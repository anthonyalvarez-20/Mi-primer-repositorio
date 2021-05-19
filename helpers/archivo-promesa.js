
const fs = require ('fs');
const colors = require('colors')


const crearArchivo = (base,listar = false,limite = 10)=>{
        return new Promise((resolve,reject)=>{
            let salida = ''
            let consola = ''
            for( let i=0; i<=limite;i++){
                multiplicacion = base*i;
               salida += `${base} x ${i} = ${multiplicacion}\n`;
               consola += `${base} ${'x'.red}. ${i} ${'='.red} ${multiplicacion}\n`;
               
            }
            if(listar){
            (console.log(consola));
            }
            fs.writeFileSync(`./salida/tabla del ${base}`,salida);
            resolve(`tabla del ${base}`);
            
        })
}

module.exports = {
    crearArchivo
}