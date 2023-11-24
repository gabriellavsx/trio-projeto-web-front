function gerarIdPesquisa(){
    return Math.floor(Math.random() * 100)+1;
}


function adicionarPesquisa() {
    // Obtenha os valores dos campos do formulário
    var nomePesquisa = document.getElementById('txtNomePesquisa').value;
    var dataPesquisa = document.getElementById('dtPesquisa').value;
    var imgPesquisaInput = document.getElementById('imgPesquisa');
    var idPesquisa = gerarIdPesquisa();

    // Verifique se um arquivo foi selecionado
    if (imgPesquisaInput.files.length > 0) {
        var file = imgPesquisaInput.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            var imagemPesquisa = reader.result;
            var idUsuario = obterIdUsuarioLogado()

            // Crie um objeto representando a nova pesquisa
            var novaPesquisa = {
                nomePesquisa: nomePesquisa,
                dataPesquisa: dataPesquisa,
                imagemPesquisa: imagemPesquisa,
                idUsuario: idUsuario,
                idPesquisa: idPesquisa
            };

            // Recupere a lista de pesquisas do localStorage
            var listaPesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];

            // Adicione a nova pesquisa à lista
            listaPesquisas.push(novaPesquisa);

            // Armazene a lista atualizada no localStorage
            localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));

            // Redirecione para a página Home.html
            window.location.href = 'Home_copy.html';
        };

        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione uma imagem.');
    } 
}

function obterIdUsuarioLogado(){
    return localStorage.getItem('idUsuario') || null
}