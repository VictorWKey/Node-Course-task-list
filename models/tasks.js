import { readDB } from "../helpers/manageDB.js";
import { Task } from "./task.js";

class Tasks {
    constructor(){
        this._listed = {};
    }

    get arrayList(){
        const list = [];
        Object.keys(this._listed).forEach(key => {
            const task = this._listed[key];
            list.push(task);
        });

        return list;
    }

    
    //La siguiente funcion lo que hara es agarrar lo que ya esta en la base de datos y agregarlo al objeto ._listed para que en vez de que se sobreponga la informacion, si se sobreponga pero antes de eso agregar lo que ya esta dentro de la base de datos
    loadTasksFromArray(tasks = []){
        tasks.forEach( task => this._listed[task.id] = task);        
    }

    createTask(desc = ``){
        const task = new Task(desc);
        
        this._listed[task.id] = task;
    }

    listTasks(){
        this.arrayList.forEach((task, i) => {
            const idx = `${i + 1 + "."}`.green;
            const {desc, completedOn} = task;
            const state = (completedOn) ? `Completed`.green : `Pendant`.red;

            console.log(`${idx} ${desc} :: ${state}`);
        });
    }

    listPendantCompleted(completed = true){
        let counter = 0;
        this.arrayList.forEach((task, i) => {
            const idx = `${i + 1 + "."}`.green;
            const {desc, completedOn} = task;
            const state = (completedOn) ? completedOn.green : `Pendant`.red;

            if(completed){
                if (completedOn){
                    counter += 1;
                    console.log(`${counter.toString().concat(".").green} ${desc} :: ${state}`);
                }
            } else {
                if (!completedOn){
                    counter += 1;
                    console.log(`${counter.toString().concat(".").green} ${desc} :: ${state}`);
                }
            }
        });
    }

    deleteTask(id){
        if(this._listed[id]){
            delete this._listed[id];
        }
    }

    toggleComplete(ids = []){

        ids.forEach(id => {
            const task = this._listed[id];

            if(!task.completedOn){
                task.completedOn = new Date().toISOString();
            }
        });

        this.arrayList.forEach(task => {
            if(!ids.includes(task.id)){
                this._listed[task.id].completedOn = null;
            }

        });

    }
}

export {Tasks};