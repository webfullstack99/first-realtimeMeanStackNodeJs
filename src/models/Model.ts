export abstract class Model {
    protected controller: string;

    constructor(controller: string) {
        this.controller = controller;
    }

    public abstract getModel();
}