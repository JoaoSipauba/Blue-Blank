function dados(){
    //variavel com tamanho do banco de dados
    var tam = localStorage.length;
    //tirando 2 keys
    tam = (tam - 2) + 1;
    //verificando se o tamanho é -1
    if(tam == -1){
        tam = 1;
    };

    localStorage.setItem(`user ${tam}`, document.getElementById('username').value);
    localStorage.setItem(`password ${tam}`, document.getElementById('password').value);
    localStorage.setItem(`account ${tam}`, document.getElementById('account').value);

    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('account').value = "";
    $('seletor').val('')
    
;};

function login(){
    var pass, acc;
    var acc = document.getElementById('account').value;


    for (var i = 0; i < localStorage.length; i++){
        if (i != 0){
            pass = document.getElementById('password').value
            acc = document.getElementById('account').value
            console.log(pass)
            console.log(acc)
            if (pass == localStorage.getItem(`password ${i}`) && acc == localStorage.getItem(`account ${i}`)){
                document.getElementById('password').value = "";
                document.getElementById('account').value = "";
                location.href = "index.html";
                break
            }else if(pass != localStorage.getItem(`password ${i}`) && acc != localStorage.getItem(`account ${i}`)){

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