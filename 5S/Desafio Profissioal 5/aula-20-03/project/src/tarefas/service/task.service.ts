import taskRepository from "../repository/task.repository";

class TaskService{

    async createTask(task: any){
        return taskRepository.executeCreateTask(task);
    }


}

export default new TaskService();