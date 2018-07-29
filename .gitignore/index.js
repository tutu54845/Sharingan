// INDEX.JS //

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame("En développement!!!")
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
});

client.login(process.env.BOT_TOKEN);
