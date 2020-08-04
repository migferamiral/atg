const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`).then(m => { setTimeout(function(){  m.delete( ) }, 30000) });
  if (db.fetch(`linkK_${message.channel.id}`)) {
  return message.reply(`Bu özellik zaten açık.`).then(m => { setTimeout(function(){  m.delete( ) }, 30000) });
}
  db.set(`linkK_${message.channel.id}`, message.channel.id)
  message.reply(`Bu özellik bu kanalda **başarıyla açıldı.** ${client.emojis.cache.get("665285063285669908")}`).then(m => { setTimeout(function(){  m.delete( ) }, 30000) });
   };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["link-engel-aç"], 
  permLevel: 0
};

exports.help = {
  name: 'linkengelaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
