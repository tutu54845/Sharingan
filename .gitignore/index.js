// INDEX.JS //

const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("&")

client.on('ready', () => {
    client.user.setGame("😎Command : &help😎");
    console.log('Connected!');
});

client.on('message', message => {
    if(message.content === "salut"){
        message.reply("Wesh ma couille");
        console.log("Le bot dit Salut");
    }
    if(message.content === "sava"){
        message.reply("Tranquille et toi mon bro");
        console.log("Le bot répond à ta question");
    }
    if(message.content === prefix + "help"){
    var help_embed = new Discord.RichEmed()
    .setColor("#40A497")
    .setTitle("Voici mes commandes d'aide")
    .setDescription("Je suis un bot voici mes commandes disponible")
    .addField("&help", "Affiche les commandes !"
    .addField("Bonjour", "Le bot répond !")
    .setFooter("Menu d'aide")
    message.channel.sendMessage(help_embed);
    console.log("Un utilisteur a effectué la commade d'aide !")
    }
 });

client.login(process.env.BOT_TOKEN);
