
function cadastrarPesquisa(){

    var nomePesquisa = document.getElementById('txtNomePesquisa').value;
    var dataPesquisa = document.getElementById('dtPesquisa').value;
    var imagemPesquisa = document.getElementById('imgPesquisa').value;
    
    //criação do objeto
    var novaPesquisa = {
        nomePesquisa: nomePesquisa,
        dataPesquisa: dataPesquisa,
        imagemPesquisa: imagemPesquisa
    };

    // Recupera a lista de pesquisas do localStorage
    var listaPesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];

    // Adiciona a nova pesquisa à lista
    listaPesquisas.push(novaPesquisa);
    
    // Armazena a lista atualizada no localStorage
    localStorage.setItem('listaPesquisas', JSON.stringify(listaPesquisas));

    window.location.href = 'Home.html';

}
function obterIdUsuarioLogado(){
    return localStorage.getItem('idUsuario') || null
}
