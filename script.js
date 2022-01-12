let order = [];
let clickedOrder = [];
let score = 0;

//0-verde 1=vermelho 2-amarelo 3-azul
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criando ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder - [];

    for(let i in order) {
        let elementColor = createcolorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, Number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmos da ordem gerada
let checkOrder = () =>{
    for(let i in clickedOrder) {
        if(clickedOrder[1] != order[i]){
            lose();
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando próximo nível`);
        nextLevel(); 
    }
}

//Função para o click do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.lenght] = color;
    createcolorElement(color).classList.add('selected');

    setTimeout(() => {
        createcolorElement(color).classList.remove('selected');
    })

    checkOrder();
}