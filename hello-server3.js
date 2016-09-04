var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHeader(200, {"Content-Type":"text/html"});

  if (request.url == "/") {
    response.write("<h1>P&aacute;gina Principal</h1>");
  } else if (request.url == "/benvindo") {
    response.write("<h1>Bem-vindo!!!</h1>");
  } else {
    response.write("<h1>P&aacute;gina n&atilde;o encontrada!</h1>");
  }

  response.end();
});

server.listen(3000, function() {
  console.log('Servidor rodando!');
});
