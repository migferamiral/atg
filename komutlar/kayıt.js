const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has("729794677079015456"))
return message.channel.send("**Üzgünüm, yeterli yetkin yok.**").then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Bir kullanıcı etiketlemen gerekiyor. ').then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.roles.add('729776862317903872')
  member.roles.remove('730529398435872778')
  
  let embed = new Discord.MessageEmbed() 
  .setColor('0000FF')
  .setDescription(`${kullanıcı} adlı Kullanıcıya,
<@&729776862317903872> adlı rol verildi.
\n**Kayıt eden yetkili:** ${message.author.username}`)
.setFooter('Developer by Wanted')
message.channel.send(embed)
};





exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Yetkili KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'kayıt',
}