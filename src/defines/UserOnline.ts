import { OnlineUser } from "./OnlineUser";

export class UserOnline {
    private userArr: OnlineUser[] = [];


    /**
     * Getter user
     * @return {OnlineUser[] }
     */
    public getUserArr(): OnlineUser[] {
        return this.userArr;
    }

    /**
     * Setter user
     * @param {OnlineUser[] } value
     */
    public setUserArr(value: OnlineUser[]) {
        this.userArr = value;
    }


    // MANIPULATE
    public add(item: OnlineUser) {
        this.userArr.push(item);
    }

    public getItemBySocketId(value: string): OnlineUser {
        return this.getUserArr().find((item: OnlineUser) => {
            return (item.getSocketId() == value);
        })
    }

    public getItemByUsername(value: string): OnlineUser {
        return this.getUserArr().find((item: OnlineUser) => {
            return (item.getUsername() == value);
        })
    }

    public deleteItemBySocketId(value: string): boolean {
        let index: number = this.getItemIndexBySocketId(value);
        if (index >= 0) {
            this.userArr.splice(index, 1);
            return true;
        }
        return false;
    }

    public getItemIndexBySocketId(value: string): number {
        return this.getUserArr().findIndex((item: OnlineUser) => {
            return (item.getSocketId() == value);
        })
    }

    public checkUserExistBySocketId(value: string): boolean {
        let index: number = this.getItemIndexBySocketId(value);
        return (index >= 0);
    }

    public getData(): string[] {
        let data: string[] = [];
        this.getUserArr().forEach((item: OnlineUser) => {
            data.push(item.getData());
        })
        return data;
    }
}