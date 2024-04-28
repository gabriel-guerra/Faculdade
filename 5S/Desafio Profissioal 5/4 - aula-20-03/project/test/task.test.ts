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
        const response = await request.default(app).get('/tarefa/pesquisar')

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(tasks.length)
    })


})