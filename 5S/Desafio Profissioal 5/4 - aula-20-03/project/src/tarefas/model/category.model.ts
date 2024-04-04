import { Schema, model } from "mongoose";

const schemaData = {
    name: String,
    color: String
}

const categoryEntity = new Schema(schemaData, {
    timestamps: true
});

export default model('Category', categoryEntity);
export {schemaData};

