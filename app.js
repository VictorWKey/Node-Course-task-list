import colors from 'colors';

import { completeMenu, confirmAction, deleteMenu, inquirerMenu, pause, readInput } from  "./helpers/inquirer.js";
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
        tasks.loadTasksFromArray(tasksDB);
    }

    do{
        opt = await inquirerMenu();

        switch(opt){
            case `1`:
                const desc = await readInput(`Description: `);
                const ok1 = await confirmAction(`¿Are you sure you want to create this task?`); 
                if(ok1) tasks.createTask(desc);

            break;
            case `2`:
                tasks.listTasks();
            break;
            case `3`:
                tasks.listPendantCompleted(true);
            break;
            case `4`:
                tasks.listPendantCompleted(false);
            break;
            case `5`:
                const ids = await completeMenu(tasks.arrayList);
                tasks.toggleComplete(ids);
            break;
            case `6`:
                const id = await deleteMenu(tasks.arrayList);
                if (id != `0`){
                    const ok2 = await confirmAction(`¿Are you sure you want to delete this task?`);
                    if (ok2) {
                        tasks.deleteTask(id)
                        console.log(`\nTask deleted successfuly\n`)
                    };                    
                }
            break;
        }

        saveDB(tasks.arrayList);

        await pause();

    } while(opt !== `0`)
}

main();


