const botconfig = require("./config.env")
const Discord = require('discord.js');


const bot = new Discord.Client({disableEveryone:true})

bot.on('ready', async {
    bot.user.setGame("En cours de développement &help");
    console.log("Connected");
});

bot.login(config.token);
