import taskRepository from "../repository/task.repository";

class TaskService{

    async createTask(task: any){

        console.log(await this.checkMissingData(task));
        console.log(await this.checkInvalidData(task));
        console.log(await this.checkDataNotEmpty(task));

        return await taskRepository.executeCreateTask(task);
    }

    async checkMissingData(data: any){
        const schemaFields = await Object.keys(taskRepository.getSchemaData());
        const dataFields = Object.entries(data);
        const invalidEntries = dataFields.filter(field => !schemaFields.includes(field[0]));
        const invalidKeys = invalidEntries.map(entry => entry[0]);
        return invalidKeys;
    }

    async checkInvalidData(data: any){
        const schemaFields = await Object.keys(taskRepository.getSchemaData());
        const dataKeys = Object.keys(data);
        const missingFields = schemaFields.filter(field => !dataKeys.includes(field));
        return missingFields;
    }

    async checkDataNotEmpty(data: any){
        const entries = Object.entries(data);
        const emptyValues = entries.filter(entry => entry[1] === "");
        const invalidKeys = emptyValues.map(entry => entry[0]);
        return invalidKeys;
    }




}

export default new TaskService();