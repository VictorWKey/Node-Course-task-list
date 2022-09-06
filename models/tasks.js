import { Task } from "./task.js";

class Tasks {
    constructor(){
        this._listed = {};
    }

    createTask(desc = ``){
        const task = new Task(desc);

        this._listed[task.id] = task;
    }
}

export {Tasks};