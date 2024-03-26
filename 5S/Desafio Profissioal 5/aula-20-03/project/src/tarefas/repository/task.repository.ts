import taskEntity, { schemaData } from "../entity/task.entity";

class TaskRepository{

    async executeCreateTask(task: any){
        return taskEntity.create(task);
    }
    
    async executeFindById(id: any){
        return id.length === 24 ? taskEntity.findById(id) : null;
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