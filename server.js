const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (rew, res) {
  res.send("Olá")
})

app.listen(port, () => {
  console.info("Servidor escutando na porta: sei lá" )
})
// const http = require("http");
// const app = require("./config/express");

// http.createServer(app).listen(3000, function () {
//   console.log("Servidor escutando na porta: " + this.address().port);
// });
