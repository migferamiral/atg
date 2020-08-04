const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
if(message.member.hasPermission("MANAGE_MESSAGES")) {
  let messagecount = parseInt(args[0]);

  if(isNaN(messagecount)) return message.channel.send("<a:ykirmizi:730512831107170335>  " + "| Kaç mesaj silmek istediğinizi belirtin?");

  if(messagecount > 100){
    message.channel.send("<a:ykirmizi:730512831107170335> " + "| Maximum `100` mesaj silebilirsiniz.")
  }else if(messagecount < 2 ) {
    
  } else {

  }{
    await message.delete()
    message.channel.bulkDelete(messagecount, true).then(deleted => {
      if (deleted.size <= 0) {
        return message.channel.send(
`🛑 Discord kuralları nedeniyle, 2 haftadan uzun mesajları silemiyorum.`)
      }
      const embed = new Discord.MessageEmbed()
      .setColor('RONDOM')
      .setDescription(`${deleted.size} mesaj silindi. `)
      .setFooter('Developer by Wanted')
      message.channel.send(embed).then(m => { setTimeout(function(){  m.delete( ) }, 5000) });
    })
  }
} else {
  return message.reply("<a:ykirmizi:730512831107170335> " + "| Mesajları Yönet izniniz olmadığından dolayı komutu kullanamazsın! ")
}
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil","temizle","clear"],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'TesT Komutudur',
  usage: 'temizle <sayı>'
};