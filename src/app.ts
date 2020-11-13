import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { BackendApi } from './routes/back-end-api';

class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.connectDb();
    }

    private connectDb(): void {
        mongoose.connect(`mongodb+srv://webfullstack99:Loveguitar99@cluster0.mrjwz.gcp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
        //mongodb+srv://webfullstack99:<password>@cluster0.mrjwz.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log('DB connected ===');
        });
    }

    private config(): void {
        // Parsers for POST data 
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Point static path to public folder 
        this.app.use(express.static(path.join(__dirname, 'public')));

        /** 
         * Get port from environment and store in Express. 
         */
        const port = process.env.PORT || '3000';
        this.app.set('port', port);

        /** 
         * Create HTTP server. 
         */
        const server = http.createServer(this.app);

        /** 
         * Listen on provided port, on all network interfaces. 
         */
        server.listen(port, () => console.log(`API running on localhost:${port}`));
    }

    private routes(): void {
        // get router 
        let router: express.Router;
        router = express.Router();

        // create routes 
        const api: BackendApi = new BackendApi();

        // test API 
        router.get('/api/test', api.test.bind(api));

        // use router middleware 
        this.app.use(router);

        // Catch all other routes and return the index file 
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });
    }
}
Server.bootstrap();
