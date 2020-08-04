const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
   if(message.channel.id != "729782183102775296")
  return message.channel.send("> Bu komutu <#729782183102775296> kanalında kullanınız!").then(m => { setTimeout(function(){  m.delete( ) }, 7000) }); 
message.delete()
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('<:atg:729796897145094235> Sunucumuzun IP adresi; \n mtasa://213.32.61.84:22003')
.setFooter(`Komutu Kullanan : ${message.author.tag}`)
message.channel.send(embed).then(m => { setTimeout(function(){  m.delete( ) }, 120000) });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ip'],
    permLevel: 0

};

exports.help = {
    name: 'mta',
    description: 'Sosyal Medya',
    usage: 'fb'
};