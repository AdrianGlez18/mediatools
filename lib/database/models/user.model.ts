import { model, models, Schema, Document } from "mongoose";

export interface UserInterface extends Document {
    _id: string;
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName: string;
    lastName: string;
    planId: string;
    creditBalance: number;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    photo: { type: String},
    firstName: { type: String},
    lastName: { type: String},
    planId: { type: Number, default: 1},
    creditBalance: { type: Number, default: 10},
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now }
})

const UserModel = models?.User || model('UserModel', UserSchema);

export default UserModel;