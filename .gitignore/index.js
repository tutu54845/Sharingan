const Discord = require('discord.js');
const bot = new Discord.Client();

//function de log
bot.on('ready', function() {
    bot.user.setGame("En cours de développement &help");
    console.log("Connected");
});

bot.login(config.token);
