const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = function(client, message, args) {
    let kişi = message.mentions.members.first();
    message.delete()
    if(message.author.id !== "630421965424951305")
    return message.channel.send(`Komutu kullanmak için iznin yok. \nBunun bir hata olduğunu düşünüyorsan **Yönetici** ile iletişime geç.`).then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
    message.delete()
    if (!kişi) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun.').then(m => { setTimeout(function(){  m.delete( ) }, 7000) });
    message.delete()
    const basarili = new Discord.MessageEmbed()
    .setColor(0x000000)
    .setDescription(`<@${kişi.id}> adlı kullanıcıya **${message.author}** tarafından <@&735499808604815365> rolü verildi.`) 
    kişi.roles.add('735499808604815365')
    message.channel.send(basarili).then(m => { setTimeout(function(){  m.delete( ) }, 12000) });
  }

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["n"],
  permLevel: 0 
};
exports.help = {
  name: 'nigga'
};