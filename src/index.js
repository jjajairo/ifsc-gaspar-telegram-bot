const bot = require("./modules/bot");

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

require("./app/controllers");

app.get("/", function (req, res) {
  res.send("Hello. :)");
});

app.post("/" + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

function checkBot(botToken) {
  return botToken ? true : false;
}

app.listen(PORT || 8080, () => {
  try {
    const host = app.listen().address().address;
    const port = app.listen().address().port;
    console.clear();
    console.log(`Bot active? | ${checkBot(bot.token)}`);
    console.log(`🚀Running at http://${host}:${port}`);
  } catch (error) {
    console.clear();
    console.error(`ERRO AO CONECTAR: ${error}`);
  }
});