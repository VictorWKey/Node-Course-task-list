import colors from 'colors';

import { inquirerMenu, pause, readInput } from  "./helpers/inquirer.js";
import { readDB, saveDB } from './helpers/manageDB.js';
import {Task} from './models/task.js';
import { Tasks } from './models/tasks.js';
// const { showMenu, pause } = require("./helpers/messages");

console.clear();

const main = async()=>{
    let opt = ``;

    const tasks = new Tasks();

    const tasksDB = readDB();

    if(tasksDB){

    }

    await pause();

    do{
        opt = await inquirerMenu();

        switch(opt){
            case `1`:
                const desc = await readInput(`Description: `); 
                tasks.createTask(desc);
            break;
            case `2`:
                console.log(tasks.arrayList);
            break;
        }

        // saveDB(tasks.arrayList);

        await pause();

    } while(opt !== `0`)
}

main();


