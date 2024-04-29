/* import categoryModel from '../src/tarefas/model/category.model'
import taskModel from '../src/tarefas/model/task.model'
import userModel from '../src/tarefas/model/user.model'
import { describe, it, expect, beforeEach } from '@jest/globals'
import { tasks } from './data.tasks'
import { categories } from './data.categories'
import { users } from './data.users'
import * as request from 'supertest'
import app from '../src/app'

describe('Testes das categorias', () => {

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

    it('Deve recuperar todos as categorias', async () => {

        const response = await request.default(app).get('/categoria/pesquisar');

        expect(response.status).toEqual(200);
        expect(response.body.length).toEqual(categories.length);
        
    })

    it('Deve criar uma nova categoria', async () => {
    
        const category = {
            name: "Reunião",
            color: "Amarelo"
        }

        const response = await request.default(app).post('/categoria/criar').send(category);
        const foundCategory = await categoryModel.findById(response.body._id);

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined();
        expect(foundCategory?.name).toBe(category.name);
        expect(foundCategory?.color).toBe(category.color);

    })

    it('Deve Atualizar uma categoria', async () => {

        const categoryToUpdate = await categoryModel.findOne({name: "Cultural"});

        const category = {
            name: "Consulta",
            color: "Branco"
        }

        const response = await request.default(app).put(`/categoria/atualizar?id=${categoryToUpdate?._id}`).send(category);
        const foundCategory = await categoryModel.findById(response.body._id);

        expect(response.status).toEqual(200);
        expect(response.body._id).toBeDefined();
        expect(foundCategory?.name).toBe(category.name);
        expect(foundCategory?.color).toBe(category.color);

    })

    it('Deve Excluir uma categoria', async () => {

        const categoryToDelete = await categoryModel.findOne({name: "Profissional"});
        const response = await request.default(app).delete(`/categoria/excluir?id=${categoryToDelete?._id}`);
        const foundCategory = await categoryModel.findById(categoryToDelete?._id);

        expect(response.status).toEqual(200);
        expect(foundCategory).toBe(null);

    })

    it('Deve pesquisar as categorias de um designado', async () => {

        const user = `gabriel.guerra`;
        const userTasks = tasks.filter(task => task.associatedUser === `${user}`);
        const userCategories = [...new Set(userTasks.map(task => task.category))]

        const response = await request.default(app).get(`/categoria/designado/${user}`);
        

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(userCategories)

    })
}) */