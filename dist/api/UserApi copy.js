"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApi = void 0;
const express = __importStar(require("express"));
const UserModel_1 = require("../models/UserModel");
const router = express.Router();
class UserApi {
    constructor() {
        this.mainModel = new UserModel_1.UserModel();
    }
    navigator() {
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
    getItem(req, res) {
        this.mainModel.getItemById(req.params.id, (err, result) => {
            if (!err) {
                res.json(result);
            }
        });
    }
    getItems(req, res) {
        this.mainModel.getItems((err, result) => {
            if (!err) {
                res.json(result);
            }
        });
    }
    createItem(req, res) {
        this.mainModel.createItem(req.body, (err, result) => {
            if (!err) {
                res.json(result);
            }
        });
    }
    editItem(req, res) {
        this.mainModel.updateItemById(req.params.id, req.body, (err, sales) => {
            if (!err)
                res.json(sales);
        });
    }
    deleteItem(req, res) {
        this.mainModel.deleteById(req.params.id, (err, result) => {
            if (!err)
                res.json(result);
        });
    }
    list(req, res, next) {
        this.mainModel.listAll(((err, result) => {
            let str = `total: ${result.length}<br/><br/>`;
            if (!err) {
                result.forEach((item) => {
                    str += `${item._id}<br/>`;
                });
                res.send(str);
            }
        }));
    }
    delete(req, res, next) {
        this.mainModel.deleteAll(((err, result) => {
            if (!err) {
                res.json(result);
            }
        }));
    }
    createFakeData(req, res, next) {
        this.mainModel.addFakeData(((err, result) => {
            if (!err) {
                res.json(result);
            }
        }));
    }
}
exports.UserApi = UserApi;
//# sourceMappingURL=UserApi copy.js.map