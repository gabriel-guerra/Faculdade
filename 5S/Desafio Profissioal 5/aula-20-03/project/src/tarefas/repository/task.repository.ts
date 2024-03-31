import taskModel, { schemaData } from "../model/task.model";
import { taskType } from "../types/task.type";

class TaskRepository{

    async executeCreateTask(task: taskType){
        return taskModel.create(task);
    }
    
    async executeFindById(id: any){
        return id.length === 24 ? taskModel.findById(id) : null;
    }

    async executeFindAll(){
        return taskModel.find();
    }

    async executeFind(param: any){
        
        const result = await taskModel.find(param);
        
        return result.length === 0 ? null : result;
    }

    // usar função findAndUpdate
    async executeUpdateTask(id: any, task: taskType){
        return taskModel.findByIdAndUpdate(id, task, { new: true });
    }

    async executeDeleteTask(filter: any){
        return taskModel.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }


}

export default new TaskRepository();