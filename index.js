const express = require('express')
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

 const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: process.env['token'], //Crie um Env Chamado Token e coloque o token do seu bot lá
   prefix: "prefixo", //Coloque o Prefixo Do Seu Bot
   intents: "all"
 });

bot.onMessage()

bot.loadCommands(`./commands/`) //Crie uma pasta chamada "commands" e coloque os comandos lá (Exemplo: nomedocomando.js)
