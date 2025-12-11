import { Schema, model } from "mongoose";
import {genSalt, hash} from 'bcryptjs';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Chauffeur'],
        default: 'Chauffeur'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
});
