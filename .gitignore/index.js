const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&")

bot.on('ready', function() {
    bot.user.setGame("En cours de développement &help");
    console.log("Connected");
});

bot.login(".");
