import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const axios = require('axios');

app.use(bodyParser.json());

// QUESTION 1
app.get('/api/country/specified-name', async (req,res) => {
    axios.get('https://restcountries.eu/rest/v2/name/Malta')
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(error => {
        res.status(500).json({message: "There was an error!", error});
    });
})

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(8000, () => console.log('Listening on port 8000'));