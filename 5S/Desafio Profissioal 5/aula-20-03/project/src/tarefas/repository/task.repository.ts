import taskEntity, { schemaData } from "../entity/task.entity";

class TaskRepository{

    async executeCreateTask(task: any){
        return await taskEntity.create(task);
    }
    
    async executeFindById(id: any){
        return taskEntity.findById(id);
    }

    async executeFind(param: any){
        return taskEntity.find(param);
    }

    async executeUpdateTask(filter: any, task: any){
        return taskEntity.updateOne(filter, task);
    }

    async executeDeleteTask(filter: any){
        return taskEntity.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }


}

export default new TaskRepository();