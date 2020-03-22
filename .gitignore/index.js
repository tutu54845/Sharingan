var Discord = require('discord.js');

var bot = new discord.Client();

var prefix = "&";

Client.on('ready', function() {
    Client.user.setGame("Développement en cours");
    console.log("Connected");
});

Client.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - &help");
    }
    
    if (message.content === "yo"){
        message.reply("Wesh ma couille)");
        console.log("Le bot dit Yo");
    }

    if (message.content === "sava"){
        message.reply("Tranquille et toi mon bro)");
        console.log("Le bot répond a  ta question");
    }
});
        
Client.login(process.env.BOT_TOKEN);
