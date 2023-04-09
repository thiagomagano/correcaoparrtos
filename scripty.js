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
lista_aleatoria = []
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
        `<div id="c${i}" class="card" data-test="card"  onclick="virarcarta(this)">
        <img  class="front flip" data-test="face-up-image" src="${lista_aleatoria[i]}" alt="">
        <img data-test="face-down-image" class="back"src="Arquivos/back.png" alt="">
        </div>`
    }
}
function virarcarta(carta){
    const trocar1 = carta.querySelector('.front')
    const trocar2 = carta.querySelector('.back')
    trocar1.classList.toggle('flip')
    trocar2.classList.toggle('flip')
    carta.classList.add('selecionado')
    let selecionados = []
    const comparador = document.querySelector(".Selecionado")
    while(comparador != null){
        selecionados.push(comparador)
        comparador.classList.remove('Selecionado')
        if(selecionados.length == 2){
            if(comparador[0] !== comparador[1]){
                alert(`diferentes`)
            }
            else{
                
            }
        }
        const comparador = document.querySelector(".Selecionados")
        selecionados.push(comparador)
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