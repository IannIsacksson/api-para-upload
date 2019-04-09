const express = require('express');

const app = express();

app.use(express.json());
//Permite o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

app.listen(3333);