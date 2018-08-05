const Discord = require('discord.js');
const Client = new Discord.Client();

var prefix = "&";

Client.on('ready', function() {
    Client.user.setGame("&help | Développement en cours!");
    console.log("Connected");
});

Client.on('message', message => {
  if (message.content === prefix + "help"){
      message.channel.sendMessage("Liste des commandes: \n - &help \n - &creatediscord \n - &play");
  }
  if (message.content === prefix + "creatediscord"){
      message.channel.sendMessage("discord généré");
  }
  if (message.content === "salut"){
      message.reply("Wesh ma couille");
      console.log("Commande Salut effetué");
  }
  if (message.content === "sava"){
      message.reply("Tranquille et toi mon bro");
      console.log("Le bot répond à ta question");
  }
});

Client.login(process.env.BOT_TOKEN);
