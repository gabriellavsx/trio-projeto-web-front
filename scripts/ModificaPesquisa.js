
function obterIdPesquisaDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

var idPesquisa = obterIdPesquisaDaURL();

function alterarPesquisa() {
    var novoNome = document.getElementById('txtNomePesquisa').value;
    var novaData = document.getElementById('dtPesquisa').value;

    var novaImagemInput = document.getElementById('imgPesquisa');
    var novaImagem = novaImagemInput.files[0]

    var listaPesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];

    var pesquisaIndex = listaPesquisas.findIndex(function (pesquisa) {
        return pesquisa.idPesquisa == idPesquisa;
    });

    if (pesquisaIndex !== -1) {
        listaPesquisas[pesquisaIndex].nomePesquisa = novoNome;
        listaPesquisas[pesquisaIndex].dataPesquisa = novaData;
        
        if(novaImagem){
            var leitor = new FileReader();
            leitor.onload = function(e) {
                listaPesquisas[pesquisaIndex].imagemPesquisa = e.target.result;
                localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));
                window.location.href = 'Home.html';
            };
            leitor.readAsDataURL(novaImagem);
        }

    } else{
        localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));
        window.location.href = 'Home.html';
    }
    
}


function excluirPesquisa() {
    var listaPesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];

    var pesquisaIndex = listaPesquisas.findIndex(function (pesquisa) {
        return pesquisa.idPesquisa == idPesquisa;
    });

    if (pesquisaIndex !== -1) {
        listaPesquisas.splice(pesquisaIndex,1);
        window.location.href = 'Home.html';
        localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));
    }
    localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));

}