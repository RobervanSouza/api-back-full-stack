const express = require("express");
const cors = require("cors");
const routes = require("./src/router/restaurante.router");
const conectDb = require("./src/db/conection");
require("dotenv").config();

const porta = process.env.PORT || 3333;
const app = express();
conectDb();
app.use(express.json());
app.use(cors());
app.use("/api", routes);


app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`); // mensagem para mostra  o local onde o servidor esta rodando. 
});
