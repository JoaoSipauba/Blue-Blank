function register() {
    const cpf = document.getElementById('CPF').value;
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;
    var modal = $("#modal");
    var modalBackground = $("#modal .modal-bg");
    
    if ((cpf === "") || (email=== "") || (nome=== "") || (account=== "") || (password== "")){
        $('.alert').removeAttr('hidden');      
    }
    if((cpf!== "") && (email!== "") && (nome!== "") && (account!== "") && (password!== "")){
        localStorage.setItem("cpf",cpf)
        localStorage.setItem("email",email)
        localStorage.setItem("nome",nome)
        localStorage.setItem("account",account)
        localStorage.setItem("password",password)
    
        document.getElementById('CPF').value = "";
        document.getElementById('email').value = "";
        document.getElementById('nome').value = "";
        document.getElementById('account').value = "";
        document.getElementById('password').value = "";
        $('seletor').val('')         
        modal.show(500);
        modalBackground.click(function () {
            modal.hide(500);
            location.href = "../../index.html";
        });  
        $(".alert").alert('close');
    }
    
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

