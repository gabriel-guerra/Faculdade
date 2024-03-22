import taskEntity from "../entity/task.entity";

class TaskRepository{

    async executeCreateTask(task: any){
        return taskEntity.create(task);
    }
    
    async findById(id: any){
        return taskEntity.findById(id);
    }

}

export default new TaskRepository();