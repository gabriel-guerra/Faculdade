import taskModel, { schemaData } from "../model/task.model";

class TaskRepository{

    async executeCreateTask(task: any){
        return taskModel.create(task);
    }
    
    async executeFindById(id: any){
        return id.length === 24 ? taskModel.findById(id) : null;
    }

    async executeFindAll(){
        return taskModel.find();
    }

    async executeFind(param: any){
        return taskModel.find(param);
    }

    // usar função findAndUpdate
    async executeUpdateTask(filter: any, task: any){
        return taskModel.updateOne(filter, task);
    }

    async executeDeleteTask(filter: any){
        return taskModel.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }


}

export default new TaskRepository();