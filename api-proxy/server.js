require('dotenv').config();

const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;

// Route pour faire proxy vers l'API
app.get('/api/token', (req, res) => {
    const apiUrl = 'https://login.meteomatics.com/api/v1/token';

    const options = {
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`).toString('base64')
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            return res.status(500).send('Erreur du serveur proxy');
        }
        res.send(body);
    });
});

app.listen(PORT, () => {
    console.log(`Serveur proxy en écoute sur le port ${PORT}`);
});
