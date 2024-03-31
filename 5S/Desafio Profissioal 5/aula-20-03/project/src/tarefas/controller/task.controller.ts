import { Request, Response } from "express";
import taskService from "../service/task.service";
import { TaskEnums }  from "../enums/task.enum";

class TaskController{

    async callCreateTask(req: Request, res: Response){
        
        return res.status(201).json(await taskService.createTask(req.body));
    }

    async callfindTask(req: Request, res: Response){

        const parameters = Object.keys(req.query);
        let answer;

        if (parameters.length === 0){
            
            answer = await taskService.findAllTasks();

        }else if(parameters.includes('id')){

            answer = await taskService.findTaskById(req.query.id);

        }else if (parameters.includes('associatedUser')){

            answer = await taskService.findTaskRegex('associatedUser', req.query.associatedUser);

        }else if (parameters.includes('category')){

            answer = await taskService.findTaskFilterCategory(req.query.category);

        }else if (parameters.includes('status')){

            answer = await taskService.findTaskFilterStatus(req.query.status);

        }else{

            answer = res.status(404).send(TaskEnums.TASK_NOT_FOUND);

        }

        console.log(answer);

        return answer !== TaskEnums.TASK_NOT_FOUND ? res.json(answer) : res.status(404).send(answer);

    }

    async callFindTaskDateInterval(req:Request, res:Response){

        const parameters = req.body;

        const result = await taskService.findTaskFilterDate(parameters);
        console.log(result);

    }

    async callCountTasks(req: Request, res:Response){
        return res.json(await taskService.countTaskOfUser(req.params.user));
    }

    async callFindMostRecentTask(req: Request, res:Response){
        return res.json(await taskService.findMostRecentTask(req.params.user));
    }

    async callUpdateTask(req: Request, res: Response){

        let result;

        if (req.query.id){
            result = await taskService.updateTask(req.query.id, req.body);
        }else{
            res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }
        
        return result === TaskEnums.TASK_NOT_UPDATED ? res.status(400).send(result) : res.json(result);

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