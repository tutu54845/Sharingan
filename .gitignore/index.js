const Discord = require('discord.js');
const cron = require("node-cron");
const fs = require("fs");

const config = require("../config/config.json");

const bot = new Discord.Client({ autoReconnect: true });
bot.commands = new Discord.Collection();


bot.on('ready', async {
    bot.user.setGame("En cours de développement &help");
    console.log("Connected");
});

bot.login(config.token);
