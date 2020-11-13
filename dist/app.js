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
const back_end_api_1 = require("./routes/back-end-api");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.connectDb();
    }
    static bootstrap() {
        return new Server();
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
        const api = new back_end_api_1.BackendApi();
        // test API 
        router.get('/api/test', api.test.bind(api));
        // use router middleware 
        this.app.use(router);
        // Catch all other routes and return the index file 
        this.app.get('*', (req, res) => {
            res.sendFile(path_1.default.join(__dirname, 'public/index.html'));
        });
    }
}
Server.bootstrap();
//# sourceMappingURL=app.js.map