let listaDosNumerosEscolhidos = [];
let quantidadeLimiteDeNumeros = 100;
let numeroSecreto = criarNumeroSecreto();
let tentativas = 1
let modoDeJogo = 'normal';
let quantidadeDeChute = null;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTelaDeInicio() {
    exibirTextoNaTela('h1', 'Seja bem-vindo(a) ao jogo do número secreto');
    exibirTextoNaTela('p', `Chute um número inteiro de 1 a ${quantidadeLimiteDeNumeros}`);
}
exibirTelaDeInicio();

function exibirTelaDeInicioCom5Chances(){
    exibirTextoNaTela('h1', 'Seja bem-vindo(a) ao jogo do número secreto com 5 chances');
    exibirTextoNaTela('p', `Chute um número inteiro de 1 a ${quantidadeLimiteDeNumeros}`);
}

function verificarChute(){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou com ${tentativas} ${palavraTentativa}`;
    let chute = document.querySelector('input').value;
    if (chute != numeroSecreto){
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', 'O número é maior');
        }else{
        exibirTextoNaTela('p', 'O número é menor');
        }
    }else{
        exibirTextoNaTela('h1', 'Parabéns você acertou o número secreto!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('reiniciar2'). removeAttribute('disabled');
        return;
    }
    tentativas++
    limparCampo();

    if (modoDeJogo === '5chances' && tentativas > quantidadeDeChute){
        exibirTextoNaTela('h1', 'Game Over');
        exibirTextoNaTela('p', 'Acabaram suas tentativas');
    }else if (modoDeJogo === '5chances'){
        exibirTextoNaTela('h1', `Faltam ${quantidadeDeChute - tentativas + 1} tentativas(a)`);
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    modoDeJogo = 'normal';
    tentativas = 1;
    limparCampo();
    numeroSecreto = criarNumeroSecreto();
    exibirTelaDeInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('reiniciar2').setAttribute('disabled', true);
}

function novoJogoComTantasChances() {
    tentativas = 1;
    quantidadeDeChute = 5;
    modoDeJogo = '5chances';
    limparCampo();
    numeroSecreto = criarNumeroSecreto();
    exibirTelaDeInicioCom5Chances();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('reiniciar2').setAttribute('disabled', true);
}

function criarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeLimiteDeNumeros + 1);
    let quantidadeLimiteDaLista = listaDosNumerosEscolhidos.length;

    if (quantidadeLimiteDaLista == quantidadeLimiteDeNumeros){
        listaDosNumerosEscolhidos = [];
    }

    if (listaDosNumerosEscolhidos.includes(numeroEscolhido)){
        return criarNumeroSecreto();
    }else{
        listaDosNumerosEscolhidos.push(numeroEscolhido);
        console.log(listaDosNumerosEscolhidos);
        return numeroEscolhido;
    }
}