import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const axios = require('axios');

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

// QUESTION 1 AND 2
app.get('/api/country/fullname/:name/:fullText', async (req,res) => {
    const countryName = req.params.name;
    const isFullText = req.params.fullText;
    axios.get('https://restcountries.eu/rest/v2/name/' + countryName + (isFullText === 'true' ? '?fullText=true' : ''))
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(error => {
        res.status(404).json({message: "Country Not Found!", error});
    });
})

// QUESTION 3
app.get('/api/country/all', async (req,res) => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name')
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(error => {
        res.status(500).json({message: "There was an error!", error});
    });
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000, () => console.log('Listening on port 8000'));