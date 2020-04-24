import express from 'express';
import bodyParser from 'body-parser';

const app = express();
// adding a comment to test commit --

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(8000, () => console.log('Listening on port 8000'));