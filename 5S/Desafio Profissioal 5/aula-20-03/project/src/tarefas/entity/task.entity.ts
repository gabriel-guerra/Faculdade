import { Schema, model } from "mongoose";

const schemaData = {
    title: String,
    description: String,
    creationDate: Date,
    conclusionDate: Date,
    category: String,
    status: String, 
    associatedUser: String
};

const taskEntity = new Schema(
    schemaData, 
    {timestamps: true}
    );

export default model('Task', taskEntity);
export {schemaData};
