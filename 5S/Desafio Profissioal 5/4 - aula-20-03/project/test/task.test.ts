import categoryModel from '../src/tarefas/model/category.model'
import taskModel from '../src/tarefas/model/task.model'
import userModel from '../src/tarefas/model/user.model'
import { describe, it, expect, beforeEach } from '@jest/globals'
import { tasks } from './data.tasks'
import { categories } from './data.categories'
import { users } from './data.users'
import * as request from 'supertest'
import app from '../src/app'

describe('Testes das tarefas', () => {

    async function deleteAll(){

        const tasks = await taskModel.find();

        if (tasks.length > 0){
            
            await Promise.all([
                taskModel.deleteMany(),
                categoryModel.deleteMany(),
                userModel.deleteMany()
            ]);

        }

    }

    async function fillTasks(){

        const promises = tasks.map(task => taskModel.create(task));
        await Promise.all(promises);

    }

    async function fillCategories(){

        const promises = categories.map(category => categoryModel.create(category));
        await Promise.all(promises);

    }

    async function fillUsers(){

        const promises = users.map(user => userModel.create(user))
        await Promise.all(promises)

    }

    beforeEach(async () => {
        Promise.all([
            await deleteAll(),
            await fillTasks(),
            await fillCategories(),
            await fillUsers()
        ])
    })

    it('Deve recuperar todos as tarefas', async () => {

        const response = await request.default(app).get('/tarefa/pesquisar');

        expect(response.status).toEqual(200);
        expect(response.body.length).toEqual(tasks.length);
        
    })

    it('Deve criar uma nova tarefa', async () => {
    
        const task = {
            title: "Fazer um relatório de clientes",
            description: "Gerar um relatório dos clientes ativos.",
            creationDate: "01/19/2024",
            conclusionDate: "02/01/2024",
            category: "Profissional",
            type: "CRM",
            status: "Concluída",
            associatedUser: "gabriel.guerra"
        }

        const response = await request.default(app).post('/tarefa/criar').send(task);
        const foundTask = await taskModel.findById(response.body._id);

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined();
        expect(foundTask?.title).toBe(task.title);
        expect(foundTask?.description).toBe(task.description);
        expect(foundTask?.creationDate).toEqual(new Date(task.creationDate));
        expect(foundTask?.conclusionDate).toEqual(new Date(task.conclusionDate));
        expect(foundTask?.category).toBe(task.category);
        expect(foundTask?.type).toBe(task.type);
        expect(foundTask?.status).toBe(task.status);
        expect(foundTask?.associatedUser).toBe(task.associatedUser);

    })

    it('Deve Atualizar uma tarefa', async () => {

        const taskToUpdate = await taskModel.findOne({title: "Enviar e-mail para fornecedor."});

        const task = {
            title: "Fazer um relatório de clientes",
            description: "Gerar um relatório dos clientes ativos.",
            creationDate: "01/19/2024",
            conclusionDate: "02/01/2024",
            category: "Profissional",
            type: "CRM",
            status: "Concluída",
            associatedUser: "gabriel.guerra"
        }

        const response = await request.default(app).put(`/tarefa/atualizar/${taskToUpdate?._id}`).send(task);
        const foundTask = await taskModel.findById(response.body._id);

        expect(response.status).toEqual(200);
        expect(response.body._id).toBeDefined();
        expect(foundTask?.title).toBe(task.title);
        expect(foundTask?.description).toBe(task.description);
        expect(foundTask?.creationDate).toEqual(new Date(task.creationDate));
        expect(foundTask?.conclusionDate).toEqual(new Date(task.conclusionDate));
        expect(foundTask?.category).toBe(task.category);
        expect(foundTask?.type).toBe(task.type);
        expect(foundTask?.status).toBe(task.status);
        expect(foundTask?.associatedUser).toBe(task.associatedUser);

    })

    it('Deve Excluir uma tarefa', async () => {

        const taskToDelete = await taskModel.findOne({title: "Estudar para as provas"});
        const response = await request.default(app).delete(`/tarefa/excluir/${taskToDelete?._id}`);
        const foundTask = await taskModel.findById(taskToDelete?._id);

        expect(response.status).toEqual(200);
        expect(foundTask).toBe(null);

    })

    it('Deve pesquisar uma tarefa por id', async () => {
        const task = await taskModel.findOne({title: "Abrir vaga de emprego"});
        const response = await request.default(app).get(`/tarefa/pesquisar/id/${task?._id}`);

        expect(response.status).toEqual(200);
        expect(response.body._id).toBeDefined();
        expect(response.body.title).toBe(task?.title);
        expect(response.body.description).toBe(task?.description);
        expect(response.body.creationDate).toBe(new Date(task!.creationDate).toISOString());
        expect(response.body.conclusionDate).toBe(new Date(task!.conclusionDate).toISOString());
        expect(response.body.category).toBe(task?.category);
        expect(response.body.type).toBe(task?.type);
        expect(response.body.status).toBe(task?.status);
        expect(response.body.associatedUser).toBe(task?.associatedUser);

    })

    it('Deve pesquisar as tarefas de um designado', async () => {

        const user = `gabriel.guerra`;

        const response = await request.default(app).get(`/tarefa/pesquisar/designado/${user}`);
        const userTasks = tasks.filter(task => task.associatedUser === `${user}`);

        expect(response.status).toEqual(200);
        for (let i = 0; i < response.body.length; i++){
            expect(response.body[i]._id).toBeDefined();
            expect(response.body[i].title).toBe(userTasks[i]?.title);
            expect(response.body[i].description).toBe(userTasks[i]?.description);
            expect(response.body[i].creationDate).toBe(new Date(userTasks[i]!.creationDate).toISOString());
            expect(response.body[i].conclusionDate).toBe(new Date(userTasks[i]!.conclusionDate).toISOString());
            expect(response.body[i].category).toBe(userTasks[i]?.category);
            expect(response.body[i].type).toBe(userTasks[i]?.type);
            expect(response.body[i].status).toBe(userTasks[i]?.status);
            expect(response.body[i].associatedUser).toBe(userTasks[i]?.associatedUser);
        }

    })

    it('Deve pesquisar tarefas por categoria', async () => {

        const category = 'Profissional'

        const response = await request.default(app).get(`/tarefa/pesquisar/categoria/${category}`);
        const categoryTasks = tasks.filter(task => task.category === `${category}`);

        expect(response.status).toEqual(200);
        for (let i = 0; i < response.body.length; i++){
            expect(response.body[i]._id).toBeDefined();
            expect(response.body[i].title).toBe(categoryTasks[i]?.title);
            expect(response.body[i].description).toBe(categoryTasks[i]?.description);
            expect(response.body[i].creationDate).toBe(new Date(categoryTasks[i]!.creationDate).toISOString());
            expect(response.body[i].conclusionDate).toBe(new Date(categoryTasks[i]!.conclusionDate).toISOString());
            expect(response.body[i].category).toBe(categoryTasks[i]?.category);
            expect(response.body[i].type).toBe(categoryTasks[i]?.type);
            expect(response.body[i].status).toBe(categoryTasks[i]?.status);
            expect(response.body[i].associatedUser).toBe(categoryTasks[i]?.associatedUser);
        }

    })
    
    it('Deve listar tarefas concluídas', async () => {

        const status = 'Concluída'

        const response = await request.default(app).get(`/tarefa/concluidas`);
        const statusTasks = tasks.filter(task => task.status === `${status}`);

        expect(response.status).toEqual(200);
        for (let i = 0; i < response.body.length; i++){
            expect(response.body[i]._id).toBeDefined();
            expect(response.body[i].title).toBe(statusTasks[i]?.title);
            expect(response.body[i].description).toBe(statusTasks[i]?.description);
            expect(response.body[i].creationDate).toBe(new Date(statusTasks[i]!.creationDate).toISOString());
            expect(response.body[i].conclusionDate).toBe(new Date(statusTasks[i]!.conclusionDate).toISOString());
            expect(response.body[i].category).toBe(statusTasks[i]?.category);
            expect(response.body[i].type).toBe(statusTasks[i]?.type);
            expect(response.body[i].status).toBe(statusTasks[i]?.status);
            expect(response.body[i].associatedUser).toBe(statusTasks[i]?.associatedUser);
        }

    })

    it('Deve listar tarefas pendentes', async () => {

        const status = 'Pendente'

        const response = await request.default(app).get(`/tarefa/pendentes`);
        const statusTasks = tasks.filter(task => task.status === `${status}`);

        expect(response.status).toEqual(200);
        for (let i = 0; i < response.body.length; i++){
            expect(response.body[i]._id).toBeDefined();
            expect(response.body[i].title).toBe(statusTasks[i]?.title);
            expect(response.body[i].description).toBe(statusTasks[i]?.description);
            expect(response.body[i].creationDate).toBe(new Date(statusTasks[i]!.creationDate).toISOString());
            expect(response.body[i].conclusionDate).toBe(new Date(statusTasks[i]!.conclusionDate).toISOString());
            expect(response.body[i].category).toBe(statusTasks[i]?.category);
            expect(response.body[i].type).toBe(statusTasks[i]?.type);
            expect(response.body[i].status).toBe(statusTasks[i]?.status);
            expect(response.body[i].associatedUser).toBe(statusTasks[i]?.associatedUser);
        }

    })

    it('Deve pesquisar as tarefas em um intervalo informado', async () => {

        const dates = {
            startDate: "01/01/2024",
            endDate: "04/01/2024"
        }

        const response = await request.default(app).post('/tarefa/pesquisar/data').send(dates);
        const taskInInterval = tasks.filter(task => task.conclusionDate! < dates.endDate && task.conclusionDate! > dates.startDate);

        expect(response.status).toEqual(200);
        for (let i = 0; i < response.body.length; i++){
            expect(response.body[i]._id).toBeDefined();
            expect(response.body[i].title).toBe(taskInInterval[i]?.title);
            expect(response.body[i].description).toBe(taskInInterval[i]?.description);
            expect(response.body[i].creationDate).toBe(new Date(taskInInterval[i]!.creationDate).toISOString());
            expect(response.body[i].conclusionDate).toBe(new Date(taskInInterval[i]!.conclusionDate).toISOString());
            expect(response.body[i].category).toBe(taskInInterval[i]?.category);
            expect(response.body[i].type).toBe(taskInInterval[i]?.type);
            expect(response.body[i].status).toBe(taskInInterval[i]?.status);
            expect(response.body[i].associatedUser).toBe(taskInInterval[i]?.associatedUser);
        }
    })

    

})