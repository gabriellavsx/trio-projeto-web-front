
function gerarIdUnico(){
    return Math.floor(Math.random() * 100) +1;
}

function cadastrarUsuario() {
    var email = document.getElementById('txtEmail').value;
    var senha = document.getElementById('txtSenha').value;
    var idUsuario = gerarIdUnico()
    var senhaRepetir = document.getElementById('txtSenhaRepetir').value;

    if (senha === senhaRepetir) {
        var novoUsuario = {
            id: idUsuario,
            email: email,
            senha: senha
        };

        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        window.location.href = 'Index.html';
    } else {
        document.getElementById('erroSenhas').innerHTML = 'Senhas não conferem';
    }
}