import { Schema, model } from "mongoose";

const userEntity = new Schema({
    username: String,
    password: String,
    email: String,
    weight: Number
}, {
    timestamps: true
});

export default model('User', userEntity);

