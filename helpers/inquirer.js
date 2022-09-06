import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: `list`,
        name: `option`,
        message: `¿What do you wish to do?`,
        choices: [
            {
                value: `1`,
                name: `1.-Create task`
            },
            {
                value: `2`,
                name: `2.-List tasks`
            },
            {
                value: `3`,
                name: `3.-List complete tasks`
            },
            {
                value: `4`,
                name: `4.-List pendant tasks`
            },
            {
                value: `5`,
                name: `5.-Complete task(s)`
            },
            {
                value: `6`,
                name: `6.-Delete task`
            },
            {
                value: `0`,
                name: `0.-Exit`
            }
        ] 
    }
];



const inquirerMenu = async()=>{
    console.clear();
    console.log("======================".green);
    console.log("   Option Selection   ".green);
    console.log("======================\n".green);

    const {option} = await inquirer.prompt(questions); //.prompt(questions) obtendra una respuesta y esa respuesta esta en una promesa, por lo tanto el await obtiene la respuesta. Prompt necesita afuerzas del array options

    return option; //opt va a ser igual a lo que demos enter en la opcion de respuestas (choices);
}


//En este caso la funcion no necesariamente tiene que ser asincrona. Hay muchas maneras de enviar correctamente esta funcion pero esta es a la que mas logica le encuentro, las demas no les encuentro tanto sentido
const pause = () =>{
    const inputQuestions = [
        {
            type: `input`,
            name: `pause`,
            message: `Enter para continuar`
        }
    ];

    console.log(`\n`)
    return inquirer.prompt(inputQuestions); //Si usaramos la funcion async, el return no siempre funciona como un resolve(), es raro esto, si quieres ignora este comentario
};

const readInput = async message => {
    const question = {
        type: `input`,
        name: `desc`,
        message,
        validate(value){
            if(value.length === 0){
                return `Por favor ingrese un valor`;
            }
            return true;
        }
    }

    const {desc} = await inquirer.prompt(question);
    return desc;

};


export {inquirerMenu, pause, readInput};