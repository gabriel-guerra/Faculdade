import { Schema, model } from "mongoose";

const taskEntity = new Schema({
    title: String,
    description: String,
    creationDate: Date,
    conclusionDate: Date,
    category: String,
    status: String, 
    associatedUser: String
}, {
    timestamps: true
});

export default model('Task', taskEntity);

