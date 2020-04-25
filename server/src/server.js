import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const axios = require('axios');

app.use(bodyParser.json());

// QUESTION 1 AND 2
app.get('/api/country/fullname/:name/:fullText', async (req,res) => {
    const countryName = req.params.name;
    const isFullText = req.params.fullText;
    axios.get('https://restcountries.eu/rest/v2/name/' + countryName + (isFullText === 'true' ? '?fullText=true' : ''))
    .then(response => {
        console.log(response);
        res.status(200).json(response.data);
    })
    .catch(error => {
        res.status(404).json({message: "Country Not Found!", error});
    });
})

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(8000, () => console.log('Listening on port 8000'));