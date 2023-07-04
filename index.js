const express = require("express");
const cors = require("cors");
// const routes = require("./src/router/api.router");
const conectDb = require("./src/db/api.conection");
require("dotenv").config();

const porta = process.env.PORT || 3333;
const app = express();
conectDb();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const controller = require('./src/controllers/api.controller');


app.get('/:modelName', controller.getAll);


app.get('/:modelName/:id', controller.getById);


app.post('/:modelName', controller.create);

app.put('/:modelName/:id', controller.update);


app.delete('/:modelName/:id', controller.deleteById);


app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`); // mensagem para mostra  o local onde o servidor esta rodando. 
});
