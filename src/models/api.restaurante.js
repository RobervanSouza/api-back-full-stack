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

const hotelSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const carroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const motoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    marca: {
        type: String, 
        required: true,
    },
    ano: {
        type: Number, 
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const gatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    raca: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const cachorroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    raca: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const turismoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const livrosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const celularesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
const filmesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const calcadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    tamanho: {
        type: [ String ],
        required: true,
    },
    cores: {
        type: [ String ],
        required: true,
    },
    detalhes: {
        LINHA: {
            type: String,
            required: true,
        },
        GÊNERO: {
            type: String,
            required: true,
        },
        FECHAMENTO: {
            type: String,
            required: true,
        },
        ORIGEM: {
            type: String,
            required: true,
        },
        TECNOLOGIA: {
            type: String,
            required: true,
        },
        GARANTIA_DO_FABRICANTE: {
            type: String,
            required: true,
        },
        INDICADO_PARA: {
            type: String,
            required: true,
        },
        PESO_DO_PRODUTO: {
            type: String,
            required: true,
        },
    },
}, {
    timestamps: true,
});

const calcadoMasculinoSchema = new mongoose.Schema({
    ...calcadoSchema.obj,
    genero: {
        type: String,
        required: true,
        default: "Masculino",
    },
});

const calcadoFemininoSchema = new mongoose.Schema({
    ...calcadoSchema.obj,
    genero: {
        type: String,
        required: true,
        default: "Feminino",
    },
});

const calcadoInfantilSchema = new mongoose.Schema({
    ...calcadoSchema.obj,
    genero: {
        type: String,
        required: true,
        default: "Infantil",
    },
});

const CalçadoMasculino = mongoose.model("CalçadoMasculino", calcadoMasculinoSchema);
const CalçadoFeminino = mongoose.model("CalçadoFeminino", calcadoFemininoSchema);
const CalçadoInfantil = mongoose.model("CalçadoInfantil", calcadoInfantilSchema);


const restaurante = mongoose.model("Restaurante", restauranteSchema);
const hotel = mongoose.model("Hotel", hotelSchema);
const carro = mongoose.model("Carro", carroSchema);
const moto = mongoose.model("Moto", motoSchema);
const filme = mongoose.model("Filme", filmesSchema);
const livro = mongoose.model("Livro", livrosSchema);
const turismo = mongoose.model("Turismo", turismoSchema);
const cachorro = mongoose.model("Cachorro", cachorroSchema);
const gato = mongoose.model("Gato", gatoSchema);
const celular = mongoose.model("Celular", celularesSchema);

module.exports = {
    CalçadoFeminino,
    CalçadoMasculino,
    CalçadoInfantil,
    restaurante,
    hotel,
    carro,
    moto,
    filme,
    livro,
    turismo,
    cachorro,
    gato,
    celular,
};
