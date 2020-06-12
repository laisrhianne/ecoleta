const express = require('express');
const server = express();

// pegar o banco de dados
const db = require('./database/db');

// Configurar pasta pública
server.use(express.static('public'));

// Utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
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
  // pegar os dados do banco de dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    const total = rows.length;
    // mostrar a página html com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total });
  });
});

// Ligar o servidor
server.listen(3000);
