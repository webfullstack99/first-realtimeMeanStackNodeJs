"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const UserSchema_1 = require("../schemas/UserSchema");
const Model_1 = require("./Model");
class UserModel extends Model_1.Model {
    constructor() {
        super('user');
        this.model = UserSchema_1.UserSchema.getModel();
    }
    //
    getItems(doneCallback) {
        this.getModel().find({}, doneCallback);
    }
    getItemById(id, doneCallback) {
        this.getModel().findById(id, doneCallback);
    }
    createItem(data, doneCallback) {
        let item = new this.model(data);
        item.save(doneCallback);
    }
    updateItemById(id, data, doneCallback) {
        this.getModel().findByIdAndUpdate(id, data, doneCallback);
    }
    deleteById(id, doneCallback) {
        this.getModel().findOneAndDelete({ _id: id }, doneCallback);
    }
    //
    listAll(doneCallback) {
        this.getModel().find({}, doneCallback);
    }
    deleteAll(doneCallback) {
        this.getModel().deleteMany({}, doneCallback);
    }
    addFakeData(doneCallback) {
        this.deleteAll((err, result) => {
            if (!err) {
                let userArr = [];
                for (let i = 0; i < 10; i++) {
                    let user = {
                        username: `username ${i}`,
                        fullName: `Anh ${i}`,
                    };
                    userArr.push(user);
                }
                this.getModel().insertMany(userArr, doneCallback);
            }
        });
    }
    // OVERRIDE
    getModel() {
        return this.model;
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map