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
