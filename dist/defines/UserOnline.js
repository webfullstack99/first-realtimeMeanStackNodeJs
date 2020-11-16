"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOnline = void 0;
class UserOnline {
    constructor() {
        this.userArr = [];
    }
    /**
     * Getter user
     * @return {OnlineUser[] }
     */
    getUserArr() {
        return this.userArr;
    }
    /**
     * Setter user
     * @param {OnlineUser[] } value
     */
    setUserArr(value) {
        this.userArr = value;
    }
    // MANIPULATE
    add(item) {
        this.userArr.push(item);
    }
    getItemBySocketId(value) {
        return this.getUserArr().find((item) => {
            return (item.getSocketId() == value);
        });
    }
    getItemByUsername(value) {
        return this.getUserArr().find((item) => {
            return (item.getUsername() == value);
        });
    }
    deleteItemBySocketId(value) {
        let index = this.getItemIndexBySocketId(value);
        if (index >= 0) {
            this.userArr.splice(index, 1);
            return true;
        }
        return false;
    }
    getItemIndexBySocketId(value) {
        return this.getUserArr().findIndex((item) => {
            return (item.getSocketId() == value);
        });
    }
    checkUserExistBySocketId(value) {
        let index = this.getItemIndexBySocketId(value);
        return (index >= 0);
    }
    getData() {
        let data = [];
        this.getUserArr().forEach((item) => {
            data.push(item.getData());
        });
        return data;
    }
}
exports.UserOnline = UserOnline;
//# sourceMappingURL=UserOnline.js.map