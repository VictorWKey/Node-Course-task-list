const { resolve } = require("path");

require(`colors`);


const showMenu = ()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("================".green);
        console.log("Option Selection".green);
        console.log("================\n".green);
    
        console.log(`${`1`.green} Create chore`);
        console.log(`${`2`.green} List chores`);
        console.log(`${`3`.green} List complete chores`);
        console.log(`${`4`.green} List pending chores`);
        console.log(`${`5`.green} Complete chore(s)`);
        console.log(`${`6`.green} Delete chore`);
        console.log(`${`0`.green} Exit\n`);
    
        const readline = require(`readline`).createInterface({
            input: process.stdin, //Lo que hace esto es pausar la ejecucion de la aplicacion y esperar caracteres y un enter
            output: process.stdout //Lo que hace esto es mostrarle un mensaje al usuario cuando le estemos pidiendo algo con la question
        });
    
        readline.question(`Select an option: `, opt=>{ //El primer parametro recibe el mensaje que llevarl stdout y el segundo recibe lo que se ponga en el stdin
            // console.log(opt); //Esto nos devolvera lo que pongamos en el stdin al darle enter
            readline.close(); //Esto hara que salgamos del modo de readline
            resolve(opt);
        })  
    })  
}

//No se pueden poner 2 readline al mismo tiempo, siempre se pondra la ultima. Si queremos hacer dos, tenemos que esperar a que la primera de una respuesta, la cierre y ahora si crear otra readline que tambien de una respuesta

const pause = ()=>{
    return new Promise(resolve=>{
        const readline2 = require(`readline`).createInterface({
            input: process.stdin, 
            output: process.stdout 
        });
    
        readline2.question(`\nPress ENTER to continue\n `, opt=>{  
            readline2.close(); 
            resolve();
        })   
    }) 
}

module.exports = {
    showMenu,
    pause
}