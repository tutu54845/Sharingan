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
 
Client.on('guildMemberAdd', function (message) {
    member.createDM().then(function (channel) {
     cheannel.send('Bienvenue sur le discord' +_member.displayName)

});
        
Client.login(process.env.BOT_TOKEN);
