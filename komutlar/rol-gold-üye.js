const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = function(client, message, args) {
    let kişi = message.mentions.members.first();
    if (!message.member.roles.cache.has('729775411503955999')) 
    if (!message.member.roles.cache.has('729782696867397646')) 
    if (!message.member.roles.cache.has('729784293143871538')) 
    return message.channel.send(`Komutu kullanmak için iznin yok. \n Bunun bir hata olduğunu düşünüyorsan **Yönetici** ile iletişime geç.`).then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
    message.delete()
    if (!kişi) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun.').then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
    message.delete()
  var banlog= message.guild.channels.cache.get('730152770031845486')
  const log = new Discord.MessageEmbed()
    .setColor(`#d4af37`)
    .setTimestamp()
    .setDescription(`<@${kişi.id}> adlı kullanıcıya **${message.author}** tarafından <@&729813765092278383> rolü verildi.`) 
    .setFooter(`Yetkili : ${message.author.tag}`, message.author.avatarURL)
  banlog.send(log)
    
    const basarili = new Discord.MessageEmbed()
    .setColor(`#d4af37`)
    .setTimestamp()
    .setDescription(`<@${kişi.id}> adlı kullanıcıya **${message.author}** tarafından <@&729813765092278383> rolü verildi.`) 
    .setFooter(`Yetkili : ${message.author.tag}`, message.author.avatarURL)
    kişi.roles.add('729813765092278383')
    kişi.roles.remove('730128725940764742')
    message.channel.send(basarili).then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
  }

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["gold-ver"],
  permLevel: 0 
};
exports.help = {
  name: 'gold'
};