let PORT = process.env.PORT || 3000;

const API_KEY = "04a1d17dd80569df660d3a4cc5290886";//process.env.API_KEY;
const axios = require('axios');
const express = require('express');
const { json } = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));


app.post('/weather', (req, res) => {
    console.log(req.body);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&APPID=${API_KEY}&units=metric`;
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
app.listen(PORT, () => {
    console.log('Server Started...');
});