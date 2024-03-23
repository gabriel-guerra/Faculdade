import taskEntity, { schemaData } from "../entity/task.entity";

class TaskRepository{

    async executeCreateTask(task: any){
        return await taskEntity.create(task);
    }
    
    async findById(id: any){
        return taskEntity.findById(id);
    }

    async getSchemaData(){
        return schemaData;
    }

}

export default new TaskRepository();