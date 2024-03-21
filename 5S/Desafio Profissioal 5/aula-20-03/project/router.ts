import {Router} from 'express'
import helloController from "./src/tarefas/controller/helloController"

const router = Router();
router.get('/hello', helloController.helloWorld)

export {router};