const Discord = require('discord.js');
const Client = new Discord.Client();

var prefix = "&";

Client.on('ready', function() {
    Client.user.setGame("😎Command : &help😎");
    console.log("Connected");
});

Client.on('message', message => {
    if (message.content === "salut"){
        message.reply("Wesh ma couille)");
        console.log("Commande Salut effetué");
    }
});   
        
Client.login(process.env.BOT_TOKEN);
