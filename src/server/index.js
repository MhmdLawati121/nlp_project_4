const path = require('path');
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(express.static('dist'))
app.use(express.json())

/* Middleware*/

// Bodyparser
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Api-setup
const api_key = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.post('/submit-url', async (req, res) => {
    console.log("Request received");
    const url = req.body.url;
    console.log("URL:", url);
    const fullURL = `https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&lang=auto&url=${url}`;

    try {
        const apiResponse = await fetch(fullURL);

        // Check if the request was successful
        if (!apiResponse.ok) {
            throw new Error('Failed to fetch');
        }

        // Parse the response
        const responseData = await apiResponse.json();
        console.log(responseData);
        console.log(responseData.status.code);

        // Send the response back to the client
        res.status(200).json(responseData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' }); // Send an error response to the client
    }
});

// designates what port the app will listen to for incoming requests
port = 8000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})


