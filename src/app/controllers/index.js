const fs = require("fs");
const path = require("path");

//exportar todos os código da pasta controller, dando require neles
fs.readdirSync(__dirname) //ler o dir atual
  //arquivo não pode começar com '.' e nem se chamar 'index.js'
  .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach((file) => require(path.resolve(__dirname, file)));
