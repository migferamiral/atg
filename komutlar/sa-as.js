const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:hata:715527287491264592> | Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmanız gerekmektedir.").then(m => { setTimeout(function(){  m.delete( ) }, 5000) });
  if(!args[0]) {
                const embed = new Discord.MessageEmbed()
                        .setTitle('Bilgilendirme')
                        .setDescription(`**Sa-As** sistemini açmak için w!sa-as aç yazmalısın.`)
                        .addField('Sa-As sistemi nedir?' , 'Selam verilince Aleyküm Selam olarak yanıt verir.')
                        .setColor("RANDOM")
                        .setFooter('© Developer Wanted#0027')
                        .setTimestamp()
                return message.channel.send({embed})
                
  }
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot selam verildiğinde cevap verecek. <a:tik:703423100527706133>`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(` Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot selam verildiğinde cevap vermeyecek. <a:red:703423102088118289>`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'w!sa-as'
};