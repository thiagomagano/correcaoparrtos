const card_number = prompt("quantas cartaspode ser de 2 a 14 cartas e somente par")
let comparador = mesa.querySelectorAll(".selecionado")
const imagens = [
    'Arquivos/bobrossparrot.gif',
    'Arquivos/bobrossparrot.gif',
    'Arquivos/explodyparrot.gif',
    'Arquivos/explodyparrot.gif',
    'Arquivos/fiestaparrot.gif',
    'Arquivos/fiestaparrot.gif',
    'Arquivos/metalparrot.gif',
    'Arquivos/metalparrot.gif',
    'Arquivos/revertitparrot.gif',
    'Arquivos/revertitparrot.gif',
    'Arquivos/tripletsparrot.gif',
    'Arquivos/tripletsparrot.gif',
    'Arquivos/unicornparrot.gif',
    'Arquivos/unicornparrot.gif'
]
while(card_number > 14 || card_number%2 !=0 || card_number <= 0 ){
    card_number = prompt("quantas cartaspode ser de 2 a 14 cartas e somente par")
}
function adicinorcartas(card_number){
    let mesa = document.getElementById('mesa');
    let cartas_conteudo = []

    for(let i = 1;i <= card_number ; i++){
        mesa.innerHTML +=
        `<div id="c${i}" class="card" onclick="virarcarta(this)">
        <img  class="front flip" src="${imagens[i-1]}" alt="">
        <img  class="back"src="Arquivos/back.png" alt="">
        </div>`
    }
}
function virarcarta(carta){
    const trocar1 = carta.querySelector('.front')
    const trocar2 = carta.querySelector('.back')
    trocar1.classList.toggle('flip')
    trocar2.classList.toggle('flip')
    carta.classList.add('selecionado')
    const comparador = Array.from(document.querySelectorAll(".Selecionados"))
    //if(comparador.length >=2 && comparador[0] === comparador[1]){
    //    comparador[0].classList.add('certo')
    //    comparador[1].classList.add('certo')
    //    comparador[0].classList.remove('selecionado')
    //    comparador[0].classList.remove('selecionado')
    //}else{
    //    trocar1.classList.toggle('flip')
    //    trocar2.classList.toggle('flip')
    //    carta.classList.remove('selecionado')
    //}
}
adicinorcartas(card_number)