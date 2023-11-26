function gerarIdPesquisa(){
    return Math.floor(Math.random() * 100)+1;
}

function adicionarPesquisa() {

    var nomePesquisa = document.getElementById('txtNomePesquisa').value;
    var dataPesquisa = document.getElementById('dtPesquisa').value;
    var imgPesquisaInput = document.getElementById('imgPesquisa');
    var idPesquisa = gerarIdPesquisa();

    if (imgPesquisaInput.files.length > 0) {
        var file = imgPesquisaInput.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            var imagemPesquisa = reader.result;
            var idUsuario = obterIdUsuarioLogado()

            var novaPesquisa = {
                nomePesquisa: nomePesquisa,
                dataPesquisa: dataPesquisa,
                imagemPesquisa: imagemPesquisa,
                idUsuario: idUsuario,
                idPesquisa: idPesquisa
            };

            var listaPesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];

            listaPesquisas.push(novaPesquisa);

            localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));

            window.location.href = 'Home.html';
        };

        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione uma imagem.');
    } 
}

function obterIdUsuarioLogado(){
    return localStorage.getItem('idUsuario') || null
}