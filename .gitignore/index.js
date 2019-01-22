const Discord = require('discord.js');
const Client = new Discord.Client();
const token = process.env.BOT_TOKEN;

var prefix = "&";

Client.on('ready', function() {
    Client.user.setGame("Command : &help");
    console.log("Connected");
});

Client.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - &help");
    }
    
    if (message.content === "salut"){
        message.reply("Wesh ma couille)");
        console.log("Commande Salut effetuÃ©");
    }

    if (message.content === "sava"){
        message.reply("Tranquille et toi mon bro)");
        console.log("Le bot rÃ©pond Ã  ta question");
    }
});
        

