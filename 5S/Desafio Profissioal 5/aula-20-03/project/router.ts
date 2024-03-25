import {Router} from 'express';
import helloController from './src/tarefas/controller/helloController';
import taskController from './src/tarefas/controller/task.controller';
import categoryController from './src/tarefas/controller/category.controller';

const router = Router();

//hello check
router.get('/hello', helloController.helloWorld);

//task
router.post('/tarefa/criar', taskController.callCreateTask);
router.get('/tarefa/pesquisar', taskController.callfindTask);
router.put('/tarefa/atualizar', taskController.callUpdateTask);
router.delete('/tarefa/excluir', taskController.callDeleteTask);

//category
router.post('/categoria/criar', categoryController.callCreateCategory);
router.get('/categoria/pesquisar', categoryController.callFindCategory);
router.put('/categoria/atualizar', categoryController.callUpdateCategory);
router.delete('/categoria/excluir', categoryController.callDeleteCategory);


export { router };