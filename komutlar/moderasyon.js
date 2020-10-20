const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Astro v12 sürümüyle sizlerle.")
.setTitle("```Moderasyon Komutları```")
.setTimestamp()
.setDescription(" **!ban** \n **!kick** \n **!küfür-engelle** \n **!reklam-engelle** \n **!forceban** \n **!unban** \n **!güvenlik** \n **!hoşgeldin-ayarla** \n **!otorol** \n **!mod-log** \n ")
.setImage("https://cdn.discordapp.com/attachments/759943622988267550/761002542045462538/image0.png")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}