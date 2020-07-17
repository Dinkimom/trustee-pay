import { Schema } from 'mongoose';
import mongoose = require('mongoose');

const userScheme = new Schema(
    { name: String, age: Number },
    { versionKey: false },
);

export const User = mongoose.model('User', userScheme);
