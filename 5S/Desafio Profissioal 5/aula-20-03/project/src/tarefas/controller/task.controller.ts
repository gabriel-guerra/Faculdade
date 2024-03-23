import { Request, Response } from "express";
import taskService from "../service/task.service";
import { TaskEnums }  from "../enums/task.enum";

class TaskController{

    async callCreateTask(req: Request, res: Response){
        return res.json(await taskService.createTask(req.body));
    }

    async callfindTask(req: Request, res: Response){
        if(Object.keys(req.query).includes('id')){
            return res.json(await taskService.findTaskById(req.query.id));
        }else if (Object.keys(req.query).includes('title')){
            return res.json(await taskService.findTaskByStringKey('title', req.query.title));
        }else{
            return res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
    }

    async listTasksByUser(){

    }

    async updateTaskById(){

    }

    async deleteTaskById(){
        
    }

}

export default new TaskController()