
/*const fs = require ('fs')//libreria que exportamos para guardar nuestro app en un archivo (filesystem)

const crearArchivo = ( base = 5 )=>{
    let salida = ''
    for( i=0; i<=10;i++){
        multiplicacion = base*i
       salida += `${base} x ${i} = ${multiplicacion}\n`;
    }
    console.log(salida)

    //existen 2 maneras de crear archivos
    try{
        fs.writeFileSync(`tabla de ${base}`, salida)
        console.log(`Tabla del ${base} creada`)
    }catch(err){

    }
    fs.writeFile (`tabla-${numero}.txt ` , salida, (error)=>{
        if(error) throw error;
   
        console.log(`Tabla del ${numero} creada`);
   })

}

//exportar un archivo
/*module.exports = {
    crearArchivo
}*/