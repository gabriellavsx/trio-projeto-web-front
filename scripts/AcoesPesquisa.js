function obterIdPesquisaDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

const modificarLink = document.getElementById('modificarLink')
modificarLink.href = `ModificarPesquisa.html?id=${obterIdPesquisaDaURL()}`