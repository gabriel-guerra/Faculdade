import express, { Router } from 'express'
import mongoose from 'mongoose'
import {router} from './router'

class App{
    express: express.Application;

    private middleware(): void {
        this.express.use(express.json());
    }

    private async database() {
        let collectionName = "desafio-5-taskActivity";
        try {
            mongoose.set("strictQuery", true);
            await mongoose.connect(`mongodb://0.0.0.0:27017/${collectionName}`);
            console.log(`Connected to ${collectionName}`);
        } catch (error) {
            console.error(`Cannot connect to ${collectionName}, error: `, error);
        }
    }

    private router(): void{
        this.express.use(router);
    }

    constructor(){
        this.express = express();
        this.middleware();
        this.database();
        this.router;
    }
}

export default new App().express;