import taskRepository from "../repository/task.repository";

class TaskService{

    async createTask(task: any){

        console.log(await this.checkMissingData(task));
        console.log(await this.checkInvalidData(task));
        console.log(await this.checkDataNotEmpty(task));

        return await taskRepository.executeCreateTask(task);
    }


    //métodos de validação de dados -> deveriam ficar no middleware?

    async checkMissingData(data: any){
        const schemaKeys = await Object.keys(taskRepository.getSchemaData());
        const dataEntries = Object.entries(data);
        const invalidEntries = dataEntries.filter(field => !schemaKeys.includes(field[0]));
        return invalidEntries.map(entry => entry[0]);
    }

    async checkInvalidData(data: any){
        const schemaKeys = await Object.keys(taskRepository.getSchemaData());
        const dataKeys = Object.keys(data);
        return schemaKeys.filter(field => !dataKeys.includes(field));
    }

    async checkDataNotEmpty(data: any){
        const entries = Object.entries(data);
        const emptyValues = entries.filter(entry => entry[1] === "");
        return emptyValues.map(entry => entry[0]);
    }


}

export default new TaskService();