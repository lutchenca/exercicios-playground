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