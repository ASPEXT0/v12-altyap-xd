const Discord = require("discord.js")
exports.run = async (client, message, args) => {


    let embed = new Discord.MessageEmbed()
    .setColor(message.member.roles.highest.color)
    .setImage("https://i.ytimg.com/vi/hoK9dhpPeCE/maxresdefault.jpg")
    .setDescription("Opss Yakım Çekim Alınn")
.setAuthor(message.author.username,"https://i.ytimg.com/vi/hoK9dhpPeCE/maxresdefault.jpg")
    message.channel.send(embed)
};

  

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['tost'], ///darkcode
 permLevel: 0
};

exports.help = {
 name: 'tost',
 description: 'tost resmi atar',
 usage: 'tost'
};
