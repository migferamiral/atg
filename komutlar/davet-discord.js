const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(message.channel.id != "729782183102775296")
  return message.channel.send("> Bu komutu <#729782183102775296> kanalında kullanınız!").then(m => { setTimeout(function(){  m.delete( ) }, 7000) }); 
message.delete()
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('<a:discord:707924527249883197> Discord Davet Link; \n https://discord.gg/ZaGTAVh')
.setFooter(`Komutu Kullanan : ${message.author.tag}`)
message.channel.send(embed).then(m => { setTimeout(function(){  m.delete( ) }, 120000) });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dc','davet'],
    permLevel: 0

};

exports.help = {
    name: 'discord',
    description: 'Sosyal Medya',
    usage: 'fb'
};