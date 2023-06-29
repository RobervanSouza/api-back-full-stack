const express = require("express");
// const cors = require("assert"); 
const conectDb = require("./src/db/conection");
const app = express();
const port = 3000; // pode fazer a alteração da port 

conectDb();



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // mensagem para mostra  o local onde o servidor esta rodando. 
});

