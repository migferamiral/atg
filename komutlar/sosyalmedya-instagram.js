const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.channel.id != "729782183102775296")
  return message.channel.send("> Bu komutu <#729782183102775296> kanalında kullanınız!").then(m => { setTimeout(function(){  m.delete( ) }, 7000) }); 
message.delete()
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('<a:atginsta:704050581647524411> Instagram Sayfamız; \n https://www.instagram.com/ankaramta/')
.setFooter(`Komutu Kullanan : ${message.author.tag}`)
message.channel.send(embed).then(m => { setTimeout(function(){  m.delete( ) }, 120000) });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ig'],
    permLevel: 0

};

exports.help = {
    name: 'instagram',
    description: 'Sosyal Medya',
    usage: 'fb'
};