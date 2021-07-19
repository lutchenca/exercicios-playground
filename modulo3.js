// modulo 3 - git

//require http
const http = require('http');

//criando um servidor 
http.createServer(function (req, res) {
    console.log('iniciando servidor');
  });

//listen
const http = require('http');

http.createServer((req, res) =>  {
	console.log("Instanciando um servidor");
}).listen(3000, 'localhost');

//express
const express = require('express');
const app = express();

//levantando o servidor
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Levantando um servidor com Express');
});

app.listen(8000, () =>
console.log('Levantando um servidor com Express')
);