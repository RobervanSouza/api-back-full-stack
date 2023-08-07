const mongoose = require("mongoose"); // inporta o mongoose

const cadastroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    celular: {
        type: Number,
        required: false, // Tornando este campo opcional
    },
    rua: {
        type: String,
        required: false, // Tornando este campo opcional
    },
    bairro: {
        type: String,
        required: false, // Tornando este campo opcional
    },
    cidade: {
        type: String,
        required: false, // Tornando este campo opcional
    },
    estado: {
        type: String,
        required: false, // Tornando este campo opcional
    },
    cpf: {
        type: Number,
        required: false, // Tornando este campo opcional
    },
    diaNascimento: {
        type: Number,
        required: false, // Tornando este campo opcional
    },
    mesNascimento: {
        type: Number,
        required: false, // Tornando este campo opcional
    },
    anoNascimento: {
        type: Number,
        required: false, // Tornando este campo opcional
    },
    cep: {
        type: Number,
        required: false, // Tornando este campo opcional
    },
}, {
    timestamps: true
});


const loginSchema = new mongoose.Schema({
    //
    email: {
        type: String,
        require: true,
    },
    senha: {
        type: String,
        require: true,
    },
   
}, {
    timestamps: true
});

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
    imageUrl: {
        type: [String],
        required: true,
    },
    descricao: {
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

    lancamento: {
        type: Boolean,
        required: true,
    },

    fechamento: {
        type: String,
        required: true,
    },
    origem: {
        type: String,
        required: true,
    },
    desconto: {
        type: String,
        required: true,
    },
    garantia: {
        type: String,
        required: true,
    },
    indicacao: {
        type: String,
        required: true,
    },
    parcelas: {
        type: Number,
        required: true,
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

const calcadoMasculino = mongoose.model("CalçadoMasculino", calcadoMasculinoSchema);
const calcadoFeminino = mongoose.model("CalçadoFeminino", calcadoFemininoSchema);
const calcadoInfantil = mongoose.model("CalçadoInfantil", calcadoInfantilSchema);


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
const cadastro = mongoose.model("Cadastro", cadastroSchema);
const login = mongoose.model("Login", loginSchema);

module.exports = {
    calcadoFeminino,
    calcadoInfantil,
    calcadoMasculino,
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
    cadastro,
    login,
};
