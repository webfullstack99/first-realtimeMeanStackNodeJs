"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
class UserSchema {
    static getSchema() {
        const schema = new Schema({
            username: String,
            password: String,
            fullName: String,
        });
        return schema;
    }
}
exports.UserSchema = UserSchema;
//# sourceMappingURL=user.js.map