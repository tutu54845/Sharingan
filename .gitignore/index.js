const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&")

bot.on('ready', function() {
    bot.user.setGame("Command: &help");
    console.log("Connected");
});

bot.login("NDAyNjM4Njk5MTcyNTkzNjc0.DjaOOA.K0lh4y0ykfpxhhAoGhoemjR_-hk");
