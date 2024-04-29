/* import categoryModel from '../src/tarefas/model/category.model'
import taskModel from '../src/tarefas/model/task.model'
import userModel from '../src/tarefas/model/user.model'
import { describe, it, expect, beforeEach } from '@jest/globals'
import { tasks } from './data.tasks'
import { categories } from './data.categories'
import { users } from './data.users'
import * as request from 'supertest'
import app from '../src/app'

describe('Testes dos usuários', () => {

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

    it('Deve recuperar todos os usuários', async () => {

        const response = await request.default(app).get('/usuario/pesquisar');

        expect(response.status).toEqual(200);
        expect(response.body.length).toEqual(users.length);
        
    })

    it('Deve criar um novo usuário', async () => {
    
        const user = {
            "username": "marcos.santos",
            "password": "741",
            "email": "marcos.santos@email.com",
            "weight": 81
        }

        const response = await request.default(app).post('/usuario/criar').send(user);
        const foundUser = await userModel.findById(response.body._id);

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined();
        expect(foundUser?.username).toBe(user.username);
        expect(foundUser?.password).toBe(user.password);
        expect(foundUser?.email).toBe(user.email);
        expect(foundUser?.weight).toBe(user.weight);
        

    })

    it('Deve Atualizar um usuário', async () => {

        const userToUpdate = await userModel.findOne({username: "ricardo.lemos"});

        const user = {
            "username": "carla.dias",
            "password": "159",
            "email": "carla.dias@email.com",
            "weight": 64
        }

        const response = await request.default(app).put(`/usuario/atualizar?id=${userToUpdate?._id}`).send(user);
        const foundUser = await userModel.findById(response.body._id);

        expect(response.status).toEqual(200);
        expect(response.body._id).toBeDefined();
        expect(foundUser?.username).toBe(user.username);
        expect(foundUser?.password).toBe(user.password);
        expect(foundUser?.email).toBe(user.email);
        expect(foundUser?.weight).toBe(user.weight);

    })

    it('Deve Excluir um usuário', async () => {

        const userToDelete = await userModel.findOne({username: "maria.silva"});
        const response = await request.default(app).delete(`/usuario/excluir?id=${userToDelete?._id}`);
        const foundUser = await userModel.findById(userToDelete?._id);

        expect(response.status).toEqual(200);
        expect(foundUser).toBe(null);

    })

}) */