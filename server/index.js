require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use(bodyParser.json());


const PORT = 4000;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen( PORT, () => {
        console.log('The magic is happening on port', PORT)
    })
})

app.post('/api/auth/register', controller.registerUser)
app.post('/api/auth/login', controller.loginUser)