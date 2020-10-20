const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Astro v12 sürümüyle yeniden sizlerle.")
.setTitle("Astro Bot yardım menüsüne hoşgeldin!")
 .setTimestamp()
.setDescription("**eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n **moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n **kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n **logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/759943622988267550/761002542045462538/image0.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}