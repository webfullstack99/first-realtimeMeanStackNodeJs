import * as express from 'express';

const router = express.Router();
export class BackendApi {

    public navigator(): express.Router {
        router.use('/test', this.test);
        return router;
    }

    public test(req: express.Request, res: express.Response) {
        res.json({ message: 'hello world' });
    }
}