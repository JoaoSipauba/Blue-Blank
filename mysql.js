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
        type: Sequelize.INTEGER
    },
    senha: {
        type: Sequelize.STRING
    }
});

const cpf = document.getElementById('CPF').value;
const email = document.getElementById('email').value;
const nome = document.getElementById('nome').value;
const account = document.getElementById('account').value;
const password = document.getElementById('password').value;

Usuarios.create({
    cpf: cpf,
    email: email,
    nome: nome,
    conta: account,
    senha: password
})
