//modulo 2 - introducao ao node 

// 1 - importação de módulos
const moduloNativo = require('http');
const moduloInstalado = require('axios');
const moduloProprio = require('./minhaFuncao');

//2 cachorro Scooby
let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}

module.exports = cachorro;


//Variaveis
var exemplo = function () {
    return 'Oi, eu sou uma função expressa';
}

//IDADE_MINIMA e MAXIMA
const IDADE_MINIMA = 18;
const IDADE_MAXIMA = 99;

//declaracao de variaveis
let verdadeiro = true;
let nada = null;
let texto = "texto";
let numero = 10;

//condicionais
let dado = true;
if (dado === true) {
    console.log('É verdadeiro!')
} else {
    console.log('É falso!')
}

// condicionais - javascript
let linguagem = "javascript"
if (linguagem === "javascript") {
    console.log('Estou aprendendo')
} else {
    console.log('Vou aprender mais pra frente')
}