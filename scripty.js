let card_number = prompt("quantas cartas pode ser de 2 a 14 cartas e somente par")
const imagens = [
    'Arquivos/bobrossparrot.gif',
    'Arquivos/explodyparrot.gif',
    'Arquivos/fiestaparrot.gif',
    'Arquivos/metalparrot.gif',
    'Arquivos/revertitparrot.gif',
    'Arquivos/tripletsparrot.gif',
    'Arquivos/unicornparrot.gif',
]
var lista_aleatoria = []
var finalizados = 0;
var tentativas = 0;
while(card_number > 15 || card_number%2 !=0 || card_number <= 3 ){
    card_number = prompt("quantas cartas pode ser de 2 a 14 cartas e somente par")
}
let temp = imagens
while(card_number > 14 || card_number%2 !=0 || card_number <= 3 ){
    card_number = prompt("quantas cartas pode ser de 2 a 14 cartas e somente par")
}
for(let j = ((Number(card_number)/2)-1);j > -1;j--){
    const aleatorio = Math.floor(Math.random()*(j+1));
    lista_aleatoria.push(temp[aleatorio]);
    lista_aleatoria.push(temp[aleatorio]);
    temp.splice(aleatorio,1)
}
lista_aleatoria.sort(comparador)
function comparador() { 
	return Math.random() - 0.5;
}
function adicinorcartas(card_number){
    let mesa = document.getElementById('mesa');
    let cartas_conteudo = []
    for(let i = 0;i < card_number ; i++){
        mesa.innerHTML +=
        `<div id="C${i}" class="card ${lista_aleatoria[i]}" data-test = 'card'  onclick="virarcarta(this)">
        <div class="front face" > <img  data-test = 'face-up-image' src="${lista_aleatoria[i]}" alt=""></div>
        <div  class="back face"><img data-test= 'face-down-image' src="Arquivos/back.png" alt=""></div>
        </div>`
    }
}
function virarcarta(carta){
    const anterior = document.querySelector('.selecionado')
    const front = carta.querySelector('.front')
    const back = carta.querySelector('.back')
    front.classList.remove('flip')
    back.classList.add('flip')
    carta.classList.add('selecionado')
    var Lista_selecionadas = document.querySelectorAll(".selecionado")
    const a = Lista_selecionadas[Lista_selecionadas.length-2]
    const fronta = a.querySelector(".front")
    const backa = a.querySelector('.back')
    const b = Lista_selecionadas[Lista_selecionadas.length-1]
    const frontb = b.querySelector('.front')
    const backb = b.querySelector('.back')
    if(Lista_selecionadas.length >= 2){
        if(a.innerHTML==b.innerHTML){
            a.classList.add('certo')
            a.classList.remove('selecionado')
            a.removeAttribute('onclick')
            b.classList.add('certo')
            b.removeAttribute('onclick')
            b.classList.remove('selecionado')
            var Lista_selecionadas = []
            tentativas = tentativas + 1;
            finalizados = finalizados + 2;
        }else if(a.innerHTML != b.innerHTML){
            a.classList.remove('selecionado')
            b.classList.remove('selecionado')
            fronta.classList.add('flip')
            frontb.classList.add('flip')
            backa.classList.remove('flip')
            backb.classList.remove('flip')
            var Lista_selecionadas = []
            tentativas += 1;
        }
    }else{
        Lista_selecionadas = []
    }
    if(finalizados >=card_number){
        alert('VOCÊ GANHOU')}
}

adicinorcartas(card_number)
