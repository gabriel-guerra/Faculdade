import { Request, Response } from "express";
import taskService from "../service/task.service";

class TaskController{

    async callCreateTask(req: Request, res: Response){
        return res.json(await taskService.createTask(req.body));
    }

    async listTasksByUser(){

    }

    async findTaskById(){

    }

    async findTaskByName(){

    }

    async updateTaskById(){

    }

    async deleteTaskById(){
        
    }

}

export default new TaskController()