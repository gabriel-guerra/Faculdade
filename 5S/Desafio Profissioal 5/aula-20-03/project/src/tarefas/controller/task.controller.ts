import { Request, Response } from "express";
import taskService from "../service/task.service";
import { TaskEnums }  from "../enums/task.enum";

class TaskController{

    async callCreateTask(req: Request, res: Response){
        
        return res.status(201).json(await taskService.createTask(req.body));
    }

    async callfindTask(req: Request, res: Response){

        const parameters = Object.keys(req.query);

        if (parameters.length === 0){
            return res.json(await taskService.findAllTasks());
        }else if(parameters.includes('id')){
            return res.json(await taskService.findTaskById(req.query.id));
        }else if (parameters.includes('title')){
            return res.json(await taskService.findTask('title', req.query.title));
        }else if (parameters.includes('associatedUser')){
            return res.json(await taskService.findTask('associatedUser', req.query.associatedUser));
        }else{
            return res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
    }

    async callUpdateTask(req: Request, res: Response){

        let result;

        if (req.query.id){
            result = await taskService.updateTask(req.query.id, req.body);
        }else{
            res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
        
        return result === null ? res.status(404).send(TaskEnums.TASK_NOT_FOUND) : res.json(result);

    }

    async callDeleteTask(req: Request, res: Response){

        let result;

        if(req.query.id){
            result = await taskService.deleteTask(req.query.id);
        }else{
            res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }

        return result === null ? res.status(404).send(TaskEnums.TASK_NOT_FOUND) : res.json(result);

    }

}

export default new TaskController()