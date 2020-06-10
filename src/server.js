const express = require('express');
const server = express();

// Configurar pasta pública
server.use(express.static('public'));

// Configurar caminhos da aplicação
// Página inicial
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Página create-point
server.get('/create-point', (req, res) => {
    res.sendFile(__dirname + '/views/create-point.html');
});

// Ligar o servidor
server.listen(3000);
