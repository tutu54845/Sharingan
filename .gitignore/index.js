const Discord = require('discord.js');
const Client = new Discord.Client();

var prefix = "&";

Client.on('ready', function() {
    Client.user.setGame("😎Command : &help😎");
    console.log("Connected");
});

Client.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - &help");
    }
    
    if (message.content === "salut"){
        message.reply("Wesh ma couille)");
        console.log("Commande Salut effetué");
    }
    
    if (message.content === "sava"){
        message.reply("Tranquille et toi mon bro)");
        console.log("Le bot répond à ta question");
    }
    
    bot.on('message', message => {

  if (message.content.startsWith('&play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }
});
        
Client.login(process.env.BOT_TOKEN);
