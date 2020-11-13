import * as express from 'express';

export class BackendApi {

    public test(req: express.Request, res: express.Response) {
        res.json({ message: 'hello world' });
    }
}