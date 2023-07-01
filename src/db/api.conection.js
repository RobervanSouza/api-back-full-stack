const mongoose = require("mongoose");
require("dotenv").config(); 

const senha = process.env.DB_PASSWORD;
const usuario = process.env.USUARIO;
async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            // eslint-disable-next-line quotes
            `mongodb+srv://${usuario}:${senha}@cluster0.snsce4o.mongodb.net/`
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
module.exports = main;