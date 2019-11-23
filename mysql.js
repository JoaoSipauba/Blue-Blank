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
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});

Usuarios.sync({force:true})