import * as express from 'express';
import { UserModel } from '../models/UserModel';

const router = express.Router();
export class UserApi {
    private mainModel: UserModel;

    constructor() {
        this.mainModel = new UserModel();
    }

    public navigator(): express.Router {
        //router.get('/list', this.list.bind(this));
        router.get('/delete', this.delete.bind(this));
        //router.get('/create', this.createFakeData.bind(this));
        router.get('/', this.getItems.bind(this));
        router.get('/:id', this.getItem.bind(this));
        router.post('/', this.createItem.bind(this));
        router.put('/:id', this.editItem.bind(this));
        router.delete('/:id', this.deleteItem.bind(this));
        return router;
    }


    public getItem(req: express.Request, res: express.Response) {
        this.mainModel.getItemById(req.params.id, (err, result) => {
            if (!err) {
                res.json(result);
            }
        })
    }

    public getItems(req: express.Request, res: express.Response) {
        this.mainModel.getItems((err, result) => {
            if (!err) {
                res.json(result);
            }
        })
    }

    public createItem(req: express.Request, res: express.Response) {
        this.mainModel.createItem(req.body, (err, result) => {
            if (!err) {
                res.json(result);
            }
        })
    }

    public editItem(req: express.Request, res: express.Response) {
        this.mainModel.updateItemById(req.params.id, req.body, (err, sales) => {
            if (!err) res.json(sales);
        });
    }

    public deleteItem(req: express.Request, res: express.Response) {
        this.mainModel.deleteById(req.params.id, (err, result) => {
            if (!err) res.json(result);
        })
    }

    public list(req: express.Request, res: express.Response, next: express.NextFunction) {
        this.mainModel.listAll(((err, result: any[]) => {
            let str: string = `total: ${result.length}<br/><br/>`;
            if (!err) {
                result.forEach((item) => {
                    str += `${item._id}<br/>`;
                })
                res.send(str);
            }
        }))
    }

    public delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        this.mainModel.deleteAll(((err, result: any[]) => {
            if (!err) {
                res.json(result);
            }
        }))
    }

    public createFakeData(req: express.Request, res: express.Response, next: express.NextFunction) {
        this.mainModel.addFakeData(((err, result: any[]) => {
            if (!err) {
                res.json(result);
            }
        }))
    }
}