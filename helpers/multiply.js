
 const fs = require('fs');
 const colors = require('colors');


 const crearArchivo=async(num = 5,listar = false,hasta = 10)=>{


     try {   
       let salida = '';
       let consola = '';

        for(let i = 1; i<=hasta;i++){
    
           salida +=`${num} x  ${i} = ${num * i}\n`;
           consola +=`${num} ${colors.blue("x")} ${i} ${colors.blue("=")} ${num * i}\n`;

         };

         if(listar){  
            console.log("==================".green);
            console.log("    Tabla del ", colors.blue(num)  );
            console.log("=================".green);
            console.log(consola);
            }

            
         fs.writeFileSync(`./salida/table- ${num}.txt`, salida);
          return  `table- ${num}.txt creado`
        
     } catch (error) {
         throw error;
     };
    };

 module.exports = {
     crearArchivo,
 }