import mongoose from 'mongoose';
const { Schema } = mongoose;

export class UserSchema {
    private static controller: string = 'user';
    public static getSchema() {
        const schema = new Schema({
            username: String,
            password: String,
            fullName: String,
        });
        return schema;
    }
    public static getModel() {
        return mongoose.model(this.controller, this.getSchema());
    }
}