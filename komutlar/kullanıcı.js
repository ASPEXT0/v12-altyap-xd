const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Astro Bot")
.setTitle("Kullanıcı Komutları")
 .setTimestamp()
.setDescription("**!avatar** = Avatarınıza bakarsınız. \n **!yetkilerim** = Yetkilerini görürsün. \n **!profil** = Profilini görürsün. \n **!sunucuresmi** = Sunucu resmini gösterir. \n **!ping** = Botun Pingine Bakarsın. \n **!id** = Birisinin id'sine Bakarsın. \n  **!davet** = Beni Sunucuna Ekle. \n **!botbilgi** = Bot istatistiklerini görürsünüz. \n **!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}