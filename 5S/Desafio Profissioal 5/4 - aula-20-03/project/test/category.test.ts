test('deve somar 2 + 2', () => {
    expect (2 + 2).toBe(4)
})

/* import categoryModel from '../src/tarefas/model/category.model'
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

    it('Deve Atualizar um registro', async () => {

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

    it('Deve Excluir um registro', async () => {

        const taskToDelete = await taskModel.findOne({title: "Estudar para as provas"});
        const response = await request.default(app).delete(`/tarefa/excluir/${taskToDelete?._id}`);
        const foundTask = await taskModel.findById(taskToDelete?._id);

        expect(response.status).toEqual(200);
        expect(foundTask).toBe(null);

    })
}) */