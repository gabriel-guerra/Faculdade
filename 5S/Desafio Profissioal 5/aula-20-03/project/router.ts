import {Router} from 'express';
import helloController from './src/tarefas/controller/helloController';
import taskController from './src/tarefas/controller/task.controller';

const router = Router();

//hello check
router.get('/hello', helloController.helloWorld);

//task
router.post('/tarefa/criar', taskController.callCreateTask);

export { router };