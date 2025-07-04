let respostaEstaVisivel = false

function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    viraCartao.classlist.toggle ('active', respostaEstaVisivel)
}