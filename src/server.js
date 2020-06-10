const express = require('express');
const server = express();

// Configurar pasta pública
server.use(express.static('public'));

// Utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

// Configurar caminhos da aplicação
// Página inicial
server.get('/', (req, res) => {
    return res.render('index.html');
});

// Página create-point
server.get('/create-point', (req, res) => {
    return res.render('create-point.html');
});

// Página search-results
server.get('/search-results', (req, res) => {
    return res.render('search-results.html');
});

// Ligar o servidor
server.listen(3000);
