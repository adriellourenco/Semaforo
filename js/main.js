'use strict'

//Declaração das Variáveis dos Elementos HTML
const semaforo = document.getElementById('semaforo')
const sinalVerde = document.getElementById('sinalVerde')
const sinalAmarelo = document.getElementById('sinalAmarelo')
const sinalVermelho = document.getElementById('sinalVermelho')
const automatico = document.getElementById('automatico')
let idPiscar 

const tornarSinalVerde = () => {
    semaforo.src = './imgs/verde.png'
}

const tornarSinalAmarelo = () => {
    semaforo.src = './imgs/amarelo.png'
}

const tornarSinalVermelho = () => {
    semaforo.src = './imgs/vermelho.png'
}

const estaVerde = () => {
    return semaforo.src.includes('verde')
}

const estaAmarelo = () => {
    return semaforo.src.includes('amarelo')
}

const estaVermelho = () => {
    return semaforo.src.includes('vermelho')
}

const estaDesligado = () => {
    return semaforo.src.includes('desligado')
}

const trocarCor = () => {
    if (estaVerde()) {
        tornarSinalAmarelo()
    } else if (estaAmarelo()) {
        tornarSinalVermelho()
    } else if (estaVermelho()) {
        tornarSinalVerde()
    } else if(estaDesligado){
        tornarSinalVerde()
    }
}

const tornarAutomatico = () => {
    clearInterval(idPiscar)
    idPiscar = setInterval(trocarCor, 1000)
}

sinalVerde.addEventListener('click', () => {
    clearInterval(idPiscar)
    tornarSinalVerde()
})
sinalAmarelo.addEventListener('click', () => {
    clearInterval(idPiscar)
    tornarSinalAmarelo()
})
sinalVermelho.addEventListener('click', () => {
    clearInterval(idPiscar)
    tornarSinalVermelho()
})
automatico.addEventListener('click', tornarAutomatico) 