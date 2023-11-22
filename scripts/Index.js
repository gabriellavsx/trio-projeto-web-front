function autenticarUsuario(email, senha) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioAutenticado = usuarios.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioAutenticado) {
        // Gera e armazena o ID do usuário no localStorage
        var idUsuario = gerarIDNumerico();
        localStorage.setItem('idUsuario', idUsuario);
        return true;
    } else {
        return false;
    }
}

function login() {
    var email = document.getElementById('txtEmail').value;
    var senha = document.getElementById('txtSenha').value;

    
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    var usuarioAutenticado = usuarios.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioAutenticado) {
        localStorage.setItem('idUsuario', usuarioAutenticado.id); 
        window.location.href = 'Home.html';
    } else {
        document.getElementById('invalidos').innerHTML = 'E-mail/Senha inválidos';
    }
}
