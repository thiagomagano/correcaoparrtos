let card_number = prompt("quantas cartas");
while(card_number > 14 || card_number%2 !=0 || card_number <= 0 ){
    card_number = prompt("desculpe teve algum erro pode digitar novamente?")
}
function adicinorcartas(card_number){
    let mesa = document.getElementById('mesa');
    for(let i = 1;i <= card_number ; i++){
        let carta = document.createElement('div')
        let imagem = document.createElement('img')
        carta.classList.add('card')
        carta.appendChild(imagem) 
        mesa.appendChild(carta)
    }
}
adicinorcartas(card_number)