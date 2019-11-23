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

Usuarios.sync({force:true})






// Usuarios.create({
//     cpf:,
//     email:,
//     nome:,
//     conta:,
//     senha:
// })