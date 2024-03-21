import { Schema, model } from "mongoose";

const categoryEntity = new Schema({
    name: String,
    color: String
}, {
    timestamps: true
});

export default model('Category', categoryEntity);

