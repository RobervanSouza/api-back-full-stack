const mongoose = require("mongoose"); // inporta o mongoose


const restauranteSchema = new mongoose.Schema({
    //
    nome: {
        type: String,
        require: true,
    },
    pais: {
        type: String,
        require: true,
    },
    cidade: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
});

const restaurante = mongoose.model("Restaurante", restauranteSchema);

module.exports = {
    restaurante
    
};
