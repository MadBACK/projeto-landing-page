var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var pocoyo = window.document.getElementById("pocoyo")
var eduarda = window.document.getElementById("eduarda")
var setaEsquerda = window.document. getElementById("seta-esquerda")

function RolarParaDireita() {
 leonardo.style = "display:none"
 eduarda.style = "display:flex"
 setaDireita.style = "display:none"
 setaEsquerda.style = "display:flex"

}

function RolarParaEsquerda() {
 leonardo.style = "display:flex"
 eduarda.style = "display:none"
 setaDireita.style = "display:flex"
 setaEsquerda.style = "display:none"

}