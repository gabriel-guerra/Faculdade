import { TaskEnums } from "../enums/task.enum";
import taskRepository from "../repository/task.repository";

class TaskService{

    async createTask(task: any){
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

    async findTask(key: string, value: any){
        
        const text = `{ "${key}": { "$regex": "${value}" } }`;
        const search = JSON.parse(text);  
        
        return await taskRepository.executeFind(search);
    }





    //métodos de validação de dados -> deveriam ficar no middleware?

    async checkMissingData(data: any){
        const schemaKeys = await taskRepository.getSchemaKeys();
        const dataKeys = Object.keys(data);
        const missingKeys = dataKeys.filter(field => !schemaKeys.includes(field));
        return missingKeys.length > 0 ? missingKeys : null;
    }

    async checkInvalidData(data: any){
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