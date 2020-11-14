import * as express from 'express';
import { UserApi } from './UserApi';

const router = express.Router();
export class BackendApi {
    public navigator(): express.Router {
        let userApi: UserApi = new UserApi();
        router.use('/user', userApi.navigator());
        return router;
    }
}