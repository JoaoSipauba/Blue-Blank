const Sequelize = require('Sequelize')
const sequelize = new Sequelize('bluebank', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log('autenticado com sucesso');
}).catch(function (erro) {
    console.log("falha ao conectar " + erro);

})
// Criar table
const Usuarios = sequelize.define('usuarios', {
    cpf: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    nome: {
        type: Sequelize.STRING
    },
    conta: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
});

const cpf = localStorage.getItem("cpf")
const email = localStorage.getItem("email")
const nome = localStorage.getItem("nome")
const conta = localStorage.getItem("account")
const senha = localStorage.getItem("password")

Usuarios.create({
    cpf: cpf,
    email: email,
    nome: nome,
    conta: conta,
    senha: senha
})