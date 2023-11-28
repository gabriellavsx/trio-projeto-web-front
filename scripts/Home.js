//retornar id usuario logado
function obterIdUsuarioLogado() {
    return localStorage.getItem('idUsuario');
}

//retornar id da pesquisa
function obterIdPesquisa(){
    return localStorage.getItem('idPesquisa')
}

//criação de cards
function mostrarPesquisas() {
    var containerPesquisa = document.getElementById('containerPesquisa');
    var pesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];
    var idUsuarioLogado = obterIdUsuarioLogado();

    containerPesquisa.innerHTML = '';

    if (pesquisas.length > 0) {
        pesquisas.forEach(function (pesquisa) {
            if (pesquisa.idUsuario === idUsuarioLogado) {
                var idPesquisa = obterIdPesquisa()

                var divPesquisa = document.createElement('div');
                divPesquisa.className = 'container';

                var imgPesquisa = document.createElement('img');
                imgPesquisa.src = pesquisa.imagemPesquisa;
                imgPesquisa.alt = 'ícone';
                imgPesquisa.style.width = '175px';  
                imgPesquisa.style.height = '150px';

                var pesquisaTitulo = document.createElement('h2');
                pesquisaTitulo.className = 'tituloBox';
                pesquisaTitulo.textContent = pesquisa.nomePesquisa;

                var pesquisaData = document.createElement('span');
                pesquisaData.className = 'subtituloBox';
                pesquisaData.textContent = pesquisa.dataPesquisa;

                var linkPesquisa = document.createElement('a')
                linkPesquisa.href = 'AcoesPesquisa.html?id=' + pesquisa.idPesquisa
                linkPesquisa.appendChild(imgPesquisa)
                linkPesquisa.appendChild(pesquisaTitulo)
                linkPesquisa.appendChild(pesquisaData)

                divPesquisa.appendChild(imgPesquisa);
                divPesquisa.appendChild(pesquisaTitulo);
                divPesquisa.appendChild(pesquisaData);

                containerPesquisa.appendChild(divPesquisa);

                divPesquisa.addEventListener('click', function () {
                    window.location.href = 'AcoesPesquisa.html?id=' + pesquisa.idPesquisa;
                });
            }
        });
    } else {
        var mensagemSemPesquisa = document.createElement('p');
        mensagemSemPesquisa.className = "textoSemPesquisa"
        mensagemSemPesquisa.textContent = 'Não há nenhuma pesquisa cadastrada.';
        
       

        containerPesquisa.appendChild(mensagemSemPesquisa);
    }
}

window.onload = mostrarPesquisas;

function filtrarPesquisas() {
    var inputBusca = document.querySelector('.busca-input');
    var termoBusca = inputBusca.value.toLowerCase();

    var pesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];
    var idUsuarioLogado = obterIdUsuarioLogado();

    var pesquisasFiltradas = pesquisas.filter(function (pesquisa) {
        return (
            pesquisa.idUsuario === idUsuarioLogado &&
            pesquisa.nomePesquisa.toLowerCase().includes(termoBusca)
        );
    });

    exibirPesquisasFiltradas(pesquisasFiltradas);
}

function exibirPesquisasFiltradas(pesquisas) {
    var containerPesquisa = document.getElementById('containerPesquisa');

    containerPesquisa.innerHTML = '';

    if (pesquisas.length > 0) {
        pesquisas.forEach(function (pesquisa) {
            var divPesquisa = document.createElement('div');
            divPesquisa.className = 'container';

            var imgPesquisa = document.createElement('img');
            imgPesquisa.src = pesquisa.imagemPesquisa;
            imgPesquisa.alt = 'ícone';
            imgPesquisa.style.width = '175px';  
            imgPesquisa.style.height = '150px'; 

            var pesquisaTitulo = document.createElement('h2');
            pesquisaTitulo.className = 'tituloBox';
            pesquisaTitulo.textContent = pesquisa.nomePesquisa;

            var pesquisaData = document.createElement('span');
            pesquisaData.className = 'subtituloBox';
            pesquisaData.textContent = pesquisa.dataPesquisa;

            divPesquisa.appendChild(imgPesquisa);
            divPesquisa.appendChild(pesquisaTitulo);
            divPesquisa.appendChild(pesquisaData);

            containerPesquisa.appendChild(divPesquisa);

            divPesquisa.addEventListener('click', function () {
                window.location.href = 'AcoesPesquisa.html';
            });
        });
    } else {
        var mensagemSemPesquisa = document.createElement('p');
        mensagemSemPesquisa.className = "textoSemPesquisa"
        mensagemSemPesquisa.textContent = 'Nenhuma pesquisa encontrada.';
        containerPesquisa.appendChild(mensagemSemPesquisa);
    }
}

document.querySelector('.busca-input').addEventListener('input', filtrarPesquisas);