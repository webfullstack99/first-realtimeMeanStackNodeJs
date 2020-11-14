import { UserSchema } from "../schemas/UserSchema";
import { Model } from './Model';

export class UserModel extends Model {

    private model;


    constructor() {
        super('user');
        this.model = UserSchema.getModel();
    }

    //
    public getItems(doneCallback: Function) {
        this.getModel().find({}, doneCallback);
    }

    public getItemById(id: string, doneCallback: Function) {
        this.getModel().findById(id, doneCallback);
    }

    public createItem(data, doneCallback: Function) {
        let item = new this.model(data);
        item.save(doneCallback);
    }

    public updateItemById(id, data, doneCallback: Function) {
        this.getModel().findByIdAndUpdate(id, data, doneCallback);
    }

    public deleteById(id, doneCallback: Function) {
        this.getModel().findOneAndDelete({_id: id}, doneCallback);
    }

    //

    public listAll(doneCallback: Function) {
        this.getModel().find({}, doneCallback);
    }

    public deleteAll(doneCallback: Function) {
        this.getModel().deleteMany({}, doneCallback);
    }

    public addFakeData(doneCallback: Function) {
        this.deleteAll((err, result) => {
            if (!err) {
                let userArr = [];
                for (let i = 0; i < 10; i++) {
                    let user = {
                        username: `username ${i}`,
                        fullName: `Anh ${i}`,
                    }
                    userArr.push(user);
                }

                this.getModel().insertMany(userArr, doneCallback)
            }
        })
    }

    // OVERRIDE
    public getModel() {
        return this.model;
    }
}