const Discord = require('discord.js');

const Client = new Discord.Client();

var prefix = "&";

Client.on('ready', function() {
    Client.user.setGame("Développement en cours !!!");
    console.log("Connected");

});

client.on('message', async message => { 

    if(message.content === "yo"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    }

    if(message.content === prefix + "help") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('#ff0033')
      .setTitle(`*Sharingan - Page d'aide !!!*`)
      .setDescription(`Description`)
      .setThumbnail('https://i.imgur.com/57KGUTQ.png')
      .addField(":tools: Modération", "`mod`,`kick`,`ban`,`mute`,`unmute`,`clear`,")
      .addField(":tada: Fun", "Fais `fun` pour voir mes commandes d'animation !")
      .addField(":headphones: Musique", "`play`, `pause`, `skip`, `stop`")
      .addField(":movie_camera: Twitch", "Fais `twit` pour voir mes commandes de steam !")
      .setFooter("Sharingan V1.00.0")
      .setTimestamp()
      message.channel.send(aide_embed);
    }
});
        
Client.login(process.env.BOT_TOKEN);
