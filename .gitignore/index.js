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
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les commandes du bot sharinganv1")
        .setDescription("cette commande est le menu du bot")
        .addField("&help,"Affiche les commandes du bot !")
        .setFooter("Menu d'aide")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisteur à effectué la commade d'aide !!")
        }
 });

client.login(process.env.BOT_TOKEN);
