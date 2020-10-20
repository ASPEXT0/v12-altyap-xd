const Discord = require("discord.js");

const db = require("quick.db")

exports.run = async (client, message, args) => {

  

let sayı = args[0]

let kanal = message.mentions.channels.first()

if(!sayı) return message.channel.send("HATA : Lütfen Bir `sayı` Girin.") 

if(!kanal) return message.channel.send("HATA : Lütfen Bir `kanal` etiketleyin.") 

message.channel.send(`

╔▬▬▬▬▬▬▬▬Sayaç▬▬▬▬▬▬▬▬▬

║► Aktif Edildi

║► **${sayı}** Olarak Güncellendi!

║► Log'u **${kanal}** Olarak Ayarladım.

║► **${sayı}** Kişi Olmamıza 💎 **${sayı - message.guild.memberCount}** 💎 Kişi Kaldı! 

╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

`)

db.set(`sayı_${message.guild.id}`,sayı)

db.set(`skanal_${message.guild.id}`,kanal.id)

};
exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases:[],

    permlevel: 4

};
exports.help = {

  name: "sayaç",

};