if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const API_KEY = process.env.API_KEY;
const axios = require('axios');
const express = require('express');
const { json } = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));


app.post('/weather', (req, res) => {
    console.log(req.body);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&APPID=${API_KEY}`;
    //const url = 'https://jsonplaceholder.typicode.com/todos/1';

    axios({
        'method': 'GET',
        'url': url,
        'contentType': 'json'
        })
        .then((response) => {
            
            res.send(
                {
                    status: response.status,
                    statusText: response.statusText,
                    weatherInfo: response.data
                }
            )
        })
        .catch((error) => {
            console.log(error)
        })

});
app.listen(3000, () => {
    console.log('Server Started');
});