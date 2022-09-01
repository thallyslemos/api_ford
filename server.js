const http = require("http");
// const express = require('express');
const app = require("./config/express");

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Opaaaa')
});

app.listen(port, () => {
  console.log('Aplicação rodando em: ' + port)
})


http.createServer(app).listen(this.port, function () {
  console.log("Servidor escutando na porta: " + this.address().port);
});