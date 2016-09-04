var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {

  var result = url.parse(request.url, true);

  switch (result.pathname) {
    case "/": _carregarPagina("artigos.html", response);
      break;
    case "/artigos": _carregarPagina("artigos.html", response);
        break;
    case "/contato": _carregarPagina("contato.html", response);
        break;
    default: _carregarPagina("erro.html", response);

  }
});

var _carregarPagina = function(pagina, response) {
  fs.readFile(__dirname + "/" + pagina, function(err,html) {
    response.writeHeader(200, {"Content-Type":"text/html"});
    response.end(html);
  });
}

server.listen(3000, function(){
  console.log('Servidor de rotas');
});
