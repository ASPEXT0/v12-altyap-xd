const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("TheFunt V12 sürümüyle yeniden sizlerle.")
.setTitle("Logo Komutları")
 .setTimestamp()
.setDescription(" **dinamik** = Dinamik logo oluşturur. \n  **altın** = Altın logo oluşturur. \n **banner** = Banner logo oluşturur. \n **basit** = Basit logo oluşturur. \n **elmas** = Elmas logo oluşturur. \n **neonmavi** = Neon mavi logo oluşturur. \n **arrow** = Ok işaretli logo oluşturur. \n **green** = Yeşil logo oluşturur. \n **alev** = Alevli logo oluşturur. \n **red** = Kırmızı logo oluşturur. ")
.setImage("https://discord.js.org/static/logo-square.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}