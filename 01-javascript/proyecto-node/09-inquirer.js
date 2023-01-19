 const inquirer = require('inquirer');
async function main(){
    try {
       const respuesta = await inquirer
           .prompt([
               {
                   type:'Input',
                   name:'apellido',
                   message:'ingresa tu nombre'
               },
               {
                   type:'Input',
                   name:'edad',
                   message:'ingresa tu edad'
               }

           ]);
       console.log('Respuesta',respuesta);
    }catch (e) {
        console.error(e);
    }


}
main();