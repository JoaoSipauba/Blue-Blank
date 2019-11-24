function register() {
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


    // document.getElementById('CPF').value = "";
    // document.getElementById('email').value = "";
    // document.getElementById('nome').value = "";
    // document.getElementById('account').value = "";
    // document.getElementById('password').value = "";
    // $('seletor').val('')

};

function login() {
    var pass, acc;
    var acc = document.getElementById('account').value;


    for (var i = 0; i < localStorage.length; i++) {
        if (i != 0) {
            pass = document.getElementById('password').value
            acc = document.getElementById('account').value
            console.log(pass)
            console.log(acc)
            if (pass == localStorage.getItem(`password ${i}`) && acc == localStorage.getItem(`account ${i}`)) {
                document.getElementById('password').value = "";
                document.getElementById('account').value = "";
                location.href = "index.html";
                break
            } else if (pass != localStorage.getItem(`password ${i}`) && acc != localStorage.getItem(`account ${i}`)) {

                console.log('deu certo!')
                var txt = $('.alert alert-danger').text('Erro!')


            };
            break
        };
    };
};

//caixa flutuante

var btAbrirModal = $("#btAbrirModal");
var modal = $("#modal");
var modalBackground = $("#modal .modal-bg");

btAbrirModal.click(function () {
    modal.fadeIn(500);
});
modalBackground.click(function () {
    modal.fadeOut(500);
});