const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send(`Başarılı Bir Şekilde Aktif Edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send(`Başarılı Bir Şekilde Kapatıldı`)
return
}
  message.channel.send('Lüten `aç` yada `kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engelle',
 description: 'Küfür Engeller',
 usage: 'küfür-engelle'
};
