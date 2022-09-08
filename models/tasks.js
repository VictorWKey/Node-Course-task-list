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


    createTask(desc = ``){
        const task = new Task(desc);

        this._listed[task.id] = task;
    }
}

export {Tasks};