import express, { NextFunction } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { BackendApi } from './api/navigator';
const cors = require('cors');


class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.config();
        this.routes();
        this.connectDb();
    }

    private setupSocketIO(server) {
        const io = require('socket.io')(server);

        io.on('connection', function (socket) {
            console.log(`a user connected with id ${socket.id}`);
            socket.on('delete-data', function (data) {
                io.emit('new-data', { data: data });
            });
            socket.on('new-data', function (data) {
                io.emit('new-data', { data: data });
            });
            socket.on('update-data', function (data) {
                io.emit('update-data', { data: data });
            });
        });
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
        this.setupSocketIO(server)

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
        //router.get('/api', api.navigator.bind(api));
        this.app.use('/api', api.navigator());

        // use router middleware 
        this.app.use(router);

        // Catch all other routes and return the index file 

        this.app.get('*', (req, res) => {
            res.json({ message: 'not-found' })
        });
    }
}
Server.bootstrap();
