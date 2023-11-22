function login() {
    var email = document.getElementById('txtEmail').value;
    var senha = document.getElementById('txtSenha').value;

    // Validar campos de entrada (por exemplo, verificar se não estão vazios)
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    var usuarioAutenticado = usuarios.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioAutenticado) {
        window.location.href = 'Home.html';
    } else {
        document.getElementById('invalidos').innerHTML = 'E-mail/Senha inválidos';
    }
}