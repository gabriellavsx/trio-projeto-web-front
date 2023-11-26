function avaliarPesquisa(avaliacao){
    var idPesquisa = document.getElementById('idPesquisa').value
    console.log('Avaliação para a pesquisa ' + idPesquisa + ':' + avaliacao)
    window.location.href = 'AgradecimentoParticipacao.html?id=' + idPesquisa
}