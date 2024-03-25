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
            return res.json(await taskService.findTask('title', req.query.title));
        }else if (Object.keys(req.query).includes('associatedUser')){
            return res.json(await taskService.findTask('associatedUser', req.query.associatedUser));
        }else{
            return res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
    }

    async callUpdateTask(req: Request, res: Response){
        
        let idOldTask;
        const newTask = req.body;

        try{
            idOldTask = req.query.id;
        }catch (error){
            return res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
                
        return res.json(await taskService.updateTask(idOldTask, newTask));
    }

    async callDeleteTask(req: Request, res: Response){

        let id;

        try{
            id = req.query.id;
        }catch (error){
            return res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
                
        return res.json(await taskService.deleteTask(id));
    }

}

export default new TaskController()