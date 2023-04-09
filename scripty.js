const card_number = prompt("quantas cartas pode ser de 2 a 14 cartas e somente par")
const imagens = [
    'Arquivos/bobrossparrot.gif',
    'Arquivos/explodyparrot.gif',
    'Arquivos/fiestaparrot.gif',
    'Arquivos/metalparrot.gif',
    'Arquivos/revertitparrot.gif',
    'Arquivos/tripletsparrot.gif',
    'Arquivos/unicornparrot.gif',
]
while(card_number > 14 || card_number%2 !=0 || card_number <= 3 ){
    card_number = prompt("quantas cartas pode ser de 2 a 14 cartas e somente par")
}
var lista_aleatoria = []
let temp = imagens
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
        <img  class="front flip" data-test = 'face-up-image' src="${lista_aleatoria[i]}" alt="">
        <img data-test= 'face-down-image' class="back"src="Arquivos/back.png" alt="">
        </div>`
    }
}
function virarcarta(carta){
    const anterior = document.querySelector('.selecionado')
    const front = carta.querySelector('.front')
    const back = carta.querySelector('.back')
    front.classList.remove('flip')
    back.classList.toggle('flip')
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
        }else if(a.innerHTML != b.innerHTML){
            a.classList.remove('selecionado')
            b.classList.remove('selecionado')
            fronta.classList.add('flip')
            frontb.classList.add('flip')
            backa.classList.remove('flip')
            backb.classList.remove('flip')
            var Lista_selecionadas = []
        }
    }else{
        Lista_selecionadas = []
    }
}
adicinorcartas(card_number)

//comparador[0].classList.add('certo')
        //comparador[1].classList.add('certo')
        //comparador[0].classList.remove('selecionado')
        //comparador[0].classList.remove('selecionado')
        //trocar1.classList.toggle('flip')
        //trocar2.classList.toggle('flip')
        //carta.classList.remove('selecionado')