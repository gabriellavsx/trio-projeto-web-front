
function obterIdUsuarioLogado() {
    return localStorage.getItem('idUsuario');
}

function obterIdPesquisa(){
    return localStorage.getItem('idPesquisa')
}

function mostrarPesquisas() {
    var containerPesquisa = document.getElementById('containerPesquisa');
    var pesquisas = JSON.parse(localStorage.getItem('listaPesquisas')) || [];
    var idUsuarioLogado = obterIdUsuarioLogado();
    // Limpar o conteúdo atual do containerPesquisa
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
                imgPesquisa.style.width = '175px';  // Ajuste a largura conforme necessário
                imgPesquisa.style.height = '150px'; // Ajuste a altura conforme necessário

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

                //cada card tem que receber o url da sua pesquisa 
                //?

                // Adicione um ouvinte de eventos para cada div de pesquisa
                divPesquisa.addEventListener('click', function () {
                    window.location.href = 'AcoesPesquisa.html?id=' + pesquisa.idPesquisa;
                });
            }
        });
    } else {
        var mensagemSemPesquisa = document.createElement('p');
        mensagemSemPesquisa.className = "textoSemPesquisa"
        mensagemSemPesquisa.textContent = 'Não há nenhuma pesquisa cadastrada.';
        
        mensagemSemPesquisa.addEventListener('click', function () {
        
        });

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

            // Adicione um ouvinte de eventos para cada div de pesquisa
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

// Adicione um ouvinte de eventos para o campo de busca
document.querySelector('.busca-input').addEventListener('input', filtrarPesquisas);