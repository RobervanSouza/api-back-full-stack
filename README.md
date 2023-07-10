
# 🚀 Minha API Dinâmica

Uma API dinâmica desenvolvida para cadastrar, editar e excluir itens de diferentes categorias. Essa API permite criar modelos personalizados para cada tipo de item, sem a necessidade de modificar o backend. Com essa API, você tem controle total sobre os dados e pode gerenciá-los por meio de uma interface amigável.

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB 
- Mongoose 
- CORS 

## 🔧 Funcionalidades

- Obter todos os itens de uma determinada categoria
- Obter um item pelo seu ID
- Criar um novo item em uma categoria
- Atualizar um item existente
- Excluir um item

## 🛠️ Configuração

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para sua máquina local.
3. Instale as dependências necessárias executando o comando `npm install`.
4. Configure as variáveis de ambiente necessárias no arquivo `.env`.
5. Certifique-se de ter um servidor MongoDB em execução.
6. Inicie o servidor executando o comando `npm start`.

## 💻 Uso

### Obtendo todos os itens de uma categoria

### Obtendo um item pelo ID
GET /api/:categoria/:id
### Criando um novo item

POST /api/:categoria

### Atualizando um item existente

PUT /api/:categoria/:id

### Excluindo um item

DELETE /api/:categoria/:id

## 👤 Autor
Criado por Robervan Souza

## 📝 Licença
Este projeto está licenciado sob a MIT License.
