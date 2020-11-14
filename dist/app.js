"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const navigator_1 = require("./api/navigator");
const cors = require('cors');
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.use(cors());
        this.config();
        this.routes();
        this.connectDb();
    }
    static bootstrap() {
        return new Server();
    }
    setupSocketIO(server) {
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
    connectDb() {
        mongoose_1.default.connect(`mongodb+srv://webfullstack99:Loveguitar99@cluster0.mrjwz.gcp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
        //mongodb+srv://webfullstack99:<password>@cluster0.mrjwz.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
        const db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log('DB connected ===');
        });
    }
    config() {
        // Parsers for POST data 
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        // Point static path to public folder 
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
        /**
         * Get port from environment and store in Express.
         */
        const port = process.env.PORT || '3000';
        this.app.set('port', port);
        /**
         * Create HTTP server.
         */
        const server = http_1.default.createServer(this.app);
        this.setupSocketIO(server);
        /**
         * Listen on provided port, on all network interfaces.
         */
        server.listen(port, () => console.log(`API running on localhost:${port}`));
    }
    routes() {
        // get router 
        let router;
        router = express_1.default.Router();
        // create routes 
        const api = new navigator_1.BackendApi();
        // test API 
        //router.get('/api', api.navigator.bind(api));
        this.app.use('/api', api.navigator());
        // use router middleware 
        this.app.use(router);
        // Catch all other routes and return the index file 
        this.app.get('*', (req, res) => {
            res.json({ message: 'not-found' });
        });
    }
}
Server.bootstrap();
//# sourceMappingURL=app.js.map