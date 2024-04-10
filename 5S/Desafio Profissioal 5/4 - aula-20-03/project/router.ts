import {Router} from 'express';
import helloController from './src/tarefas/controller/helloController';
import taskController from './src/tarefas/controller/task.controller';
import categoryController from './src/tarefas/controller/category.controller';
import userController from './src/tarefas/controller/user.controller';

const router = Router();

//hello check
router.get('/hello', helloController.helloWorld);

//task
router.post('/tarefa/criar', taskController.callCreateTask);
router.put('/tarefa/atualizar/:id', taskController.callUpdateTask);
router.delete('/tarefa/excluir/:id', taskController.callDeleteTask);
router.get('/tarefa/pesquisar', taskController.callFindAllTasks);
router.get('/tarefa/pesquisar/id/:id', taskController.callFindTaskById);
router.get('/tarefa/pesquisar/designado/:associatedUser', taskController.callFindTasksOfUser);
router.get('/tarefa/pesquisar/categoria/:category', taskController.callFindTasksByCategory);
router.get('/tarefa/concluidas', taskController.callFindTasksConcluded);
router.get('/tarefa/pendentes', taskController.callFindTasksPending);
router.post('/tarefa/pesquisar/data', taskController.callFindTaskDateInterval);
router.get('/tarefa/contar/:user', taskController.callCountUserTasks);
router.get('/tarefa/mais-recente/:user', taskController.callFindMostRecentTask);
router.get('/tarefa/media-conclusao', taskController.callAvgConclusion);
router.get('/tarefa/maior-descricao', taskController.callFindBiggestDescription);
router.get('/tarefa/mais-antiga/:user', taskController.callFindLeastRecentTask);
router.get('/tarefa/agrupar-categoria', taskController.callGroupByCategory);

//category
router.post('/categoria/criar', categoryController.callCreateCategory);
router.get('/categoria/pesquisar', categoryController.callFindCategory);
router.put('/categoria/atualizar', categoryController.callUpdateCategory);
router.delete('/categoria/excluir', categoryController.callDeleteCategory);

//user
router.post('/usuario/criar', userController.callCreateUser);
router.get('/usuario/pesquisar', userController.callfindUser);
router.put('/usuario/atualizar', userController.callUpdateUser);
router.delete('/usuario/excluir', userController.callDeleteUser);

export { router };