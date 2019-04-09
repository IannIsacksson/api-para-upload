const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://iann:iann07@goweek-backend-uydkh.gcp.mongodb.net/db-upload?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
//Permite o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

app.listen(3333);