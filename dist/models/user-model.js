"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const user_schema_1 = require("../schemas/user-schema");
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("./model");
class UserModel extends model_1.Model {
    constructor() {
        super('user');
    }
    listAll(doneCallback) {
    }
    // OVERRIDE
    getModel() {
        return mongoose_1.default.model(this.controller, this.getSchema());
    }
    getSchema() {
        return user_schema_1.UserSchema.getSchema();
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user-model.js.map