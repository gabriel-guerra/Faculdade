import { TaskEnums } from "../enums/task.enum";
import taskRepository from "../repository/task.repository";
import { taskType } from "../types/task.type";
import { userType } from "../types/user.type";

class TaskService{

    async createTask(task: taskType){

        const result = await Promise.all([this.checkMissingData(task), this.checkInvalidData(task), this.checkDataNotEmpty(task)]);

        if(!result.some(item => item !== null)){
            return await taskRepository.executeCreateTask(task);
        }else{
            return TaskEnums.TASK_NOT_FOUND;
        }
    }

    async findTaskById(id: any){
        return await taskRepository.executeFindById(id);
    }

    async findAllTasks(){  
        return await taskRepository.executeFindAll();
    }

    async findTaskRegex(key: string, value: any){
        
        if (key && value){
            const text = `{ "${key}": { "$regex": "${value}" } }`;
            const search = JSON.parse(text);
            
            return await taskRepository.executeFind(search);
        }else{
            return TaskEnums.TASK_NOT_FOUND;
        }
        
    }

    async findTaskFilterCategory(filter: any){

        const allTasks = await this.findAllTasks();
        const result = allTasks.filter(item => item.category === filter);

        return result.length === 0 ? null : result;

    }

    async findTaskFilterStatus(filter: any){

        const allTasks = await this.findAllTasks();
        const result = allTasks.filter(item => item.status === filter);

        return result.length === 0 ? null : result;

    }

    async findTaskFilterDate(filter: any){

        let startDate = new Date(filter.startDate);
        let endDate = new Date(filter.endDate);

        const allTasks = await this.findAllTasks();
        const result = allTasks.filter(item => item.conclusionDate! < endDate && item.conclusionDate! > startDate);

        return result.length === 0 ? null : result;

    }

    async countTaskOfUser(user: string){

        const userTasks = await this.findTaskRegex('associatedUser', user);

        return userTasks !== null ? userTasks.length : null;

    }

    async findMostRecentTask(user: string){

        const userTasks = await this.findTaskRegex('associatedUser', user);

        if(userTasks){
            //const mostRecentTask = userTasks.find(item => item.creationDate > new Date())
        }

    }

    async updateTask(id: any, newTask: taskType){
        const result = await Promise.all([this.checkInvalidData(newTask), this.checkDataNotEmpty(newTask)]);

        if (!result.some(item => item !== null)){
            return await taskRepository.executeUpdateTask(id, newTask);
        }else{
            return TaskEnums.TASK_NOT_UPDATED;
        }
    }

    async deleteTask(id: any){
        const filter = await taskRepository.executeFindById(id);

        if (filter){
            return await taskRepository.executeDeleteTask(filter);
        }else{
            return TaskEnums.TASK_NOT_FOUND;
        }
        
    }





    //métodos de validação de dados -> deveriam ficar no middleware?

    async checkInvalidData(data: any){
        const schemaKeys = await taskRepository.getSchemaKeys();
        const dataKeys = Object.keys(data);

        const missingKeys = dataKeys.filter(field => !schemaKeys.includes(field));

        return missingKeys.length > 0 ? missingKeys : null;
    }

    async checkMissingData(data: any){
        const schemaKeys = await taskRepository.getSchemaKeys();
        const dataKeys = Object.keys(data);

        const invalidKeys = schemaKeys.filter(field => !dataKeys.includes(field));

        return invalidKeys.length > 0 ? invalidKeys : null;
    }

    async checkDataNotEmpty(data: any){
        const entries = Object.entries(data);

        const emptyValues = entries.filter(entry => entry[1] === "");
        const emptyKeys = emptyValues.map(entry => entry[0]);

        return emptyKeys.length > 0 ? emptyKeys : null;
    }


}

export default new TaskService();