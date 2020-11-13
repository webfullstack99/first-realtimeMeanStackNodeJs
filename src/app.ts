import express from 'express';
const app = express();
const port = 3000;


// LISTEN
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})