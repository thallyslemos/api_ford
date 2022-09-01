const http = require("http");
const app = require("./config/express");

const port = process.env.PORT || 3000;

http.createServer(app).listen(this.port, function () {
  console.log("Servidor escutando na porta: " + this.address().port);
});