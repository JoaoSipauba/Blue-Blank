const Sequelize = require('Sequelize')
const sequelize = new Sequelize('bluebank','root','',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(function() {
    console.log('autenticado com sucesso');
}).catch(function (erro) {
    console.log("falha ao conectar "+erro);
    
})

// Criar table
const Usuarios = sequelize.define('usuarios',{
    cpf:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    nome:{
        type: Sequelize.STRING
    },
    conta:{
        type: Sequelize.INTEGER
    },
    senha:{
        type: Sequelize.STRING
    }
});

Usuarios.create({
    cpf: "604.182.593-05",
    email:"joaosipauba@hotmail.com",
    nome:"joao sipauba silva pessoa",
    conta: "11235",
    senha: "123"
})