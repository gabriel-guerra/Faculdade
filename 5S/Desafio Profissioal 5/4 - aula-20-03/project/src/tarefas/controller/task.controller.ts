import { Request, Response } from "express";
import taskService from "../service/task.service";
import { TaskEnums }  from "../enums/task.enum";

class TaskController{

    async callCreateTask(req: Request, res: Response){
        
        const result = await taskService.createTask(req.body);
        return result !== TaskEnums.TASK_NOT_CREATED ? res.status(201).json(result) : res.status(400).send(result);

    }

    async callfindTaskById(req: Request, res: Response){

        const result = await taskService.findTaskById(req.params.id);
        return result ? res.json(result) : res.status(404).send(TaskEnums.TASK_NOT_FOUND);

    }

    async callfindAllTasks(req: Request, res: Response){

        const result = await taskService.findAllTasks();
        return result ? res.json(result) : res.status(404).send(TaskEnums.TASK_NOT_FOUND);

    }


    async callfindTask(req: Request, res: Response){

        const parameters = Object.keys(req.query);
        let result;

        if (parameters.length === 0){           
            
        }else if (parameters.includes('associatedUser')){
            result = await taskService.findTaskRegex('associatedUser', req.query.associatedUser);

        }else if (parameters.includes('category')){
            result = await taskService.findTaskFilterCategory(req.query.category);

        }else{
            result = null;

        }

        if (!result){
            return res.status(404).send(TaskEnums.TASK_NOT_FOUND);
        }else{
            return result !== TaskEnums.TASK_NOT_FOUND ? res.json(result) : res.status(404).send(result);
        }

    }

    async CallListConcluded(req: Request, res:Response){
        const result =  await taskService.findTaskFilterStatus('Concluída');
        return result !== null ? res.json(result) : res.status(404).send(TaskEnums.TASK_NOT_FOUND);
    }

    async CallListPending(req: Request, res:Response){
        const result =  await taskService.findTaskFilterStatus('Pendente');
        return result !== null ? res.json(result) : res.status(404).send(TaskEnums.TASK_NOT_FOUND);
    }

    async callFindTaskDateInterval(req:Request, res:Response){
        const result = await taskService.findTaskFilterDate(req.body);
        return result !== null ? res.json(result) : res.status(404).send(TaskEnums.TASK_NOT_BETWEEN_DATES);
    }

    async callCountTasks(req: Request, res:Response){
        return res.json(await taskService.countTaskOfUser(req.params.user));
    }

    async callFindMostRecentTask(req: Request, res:Response){
        return res.json(await taskService.findMostRecentTask(req.params.user));
    }

    async callAvgConclusion(req:Request, res:Response){
        return res.json(await taskService.findAvgConclusion());
    }

    async callFindBiggestDescription(req:Request, res:Response){
        return res.json(await taskService.findBiggestDescription());
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