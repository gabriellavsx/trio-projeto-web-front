function obterIdPesquisaDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

//passar id para ModificarPesquisa.html
const modificarLink = document.getElementById('modificarLink')
modificarLink.href = `ModificarPesquisa.html?id=${obterIdPesquisaDaURL()}`

//passar id para Coleta.html
const coletaLink = document.getElementById('coletaLink')
coletaLink.href = `Coleta.html?id=${obterIdPesquisaDaURL()}`

//passar id para Relatorio.html
const relatorioLink = document.getElementById('relatorioLink')
relatorioLink.href = `Relatorio.html?id=${obterIdPesquisaDaURL()}`