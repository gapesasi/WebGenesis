let order = [];
let clickedOrder = [];
let score = 0;

//0-verde 1=vermelho 2-amarelo 3-azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const pontos = document.querySelector('.pontos');
const player = document.querySelector('.nome');


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createcolorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
   setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`\nVocê Acertou! Iniciando próximo nível`);
        score++;
        nextLevel(); 
    }
}

//Função para o click do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createcolorElement(color).classList.add('selected');

    setTimeout(() => {
        createcolorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//Função que retorna a cor
let createcolorElement = (color) => {
if(color == 0) {
    return green;
} else if(color == 1) {
    return red;
} else if (color == 2) {
    return yellow;
} else if(color == 3) {
    return blue;
}

}

//Função para proximo nivel do jogo
let nextLevel = () => {
    pontos.textContent = `Pontuação: ${score}`;
    shuffleOrder();
}

//Função para game over
let gameOver = () => {
    alert('Você perdeu o jogo!\nClique em OK para iniciar um novo jogo' );
    order = [];
    clickedOrder = [];
   
    playGame();
};

//Função de inicio de jogo

let playGame = () => {
    player.textContent = `Jogador: ${person}`;
    for(let color = 0; color < 4; color++){
        createcolorElement(color).classList.remove('selected');
    };
    alert('Bem vindo ao Genesis! Iniciando novo jogo...');
    score = 0;
    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


let person = prompt("Diga seu Nome!");
playGame();
