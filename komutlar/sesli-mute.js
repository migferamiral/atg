const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Bu komutu kullanabilmek için `Üyeleri sustur` yetkisine sahip olmanız gerek.")
    let kullanici = message.mentions.members.first()
    
    if (!kullanici) return message.channel.send(new Discord.MessageEmbed()
                                               .setColor('RED')
                                               .setDescription("Susturacağım kullanıcıyı belirtmelisiniz.")
                                               .setTimestamp())
    
    let süre = args[1]
    if (!süre) return message.channel.send(new Discord.MessageEmbed()
                                          .setColor('RED')
                                          .setDescription("Susturacağım süreyi belirtmelisiniz. Örnek : w!vmute @üye (süre) \n **s** (saniye) \n **m** (dakika) \n **h** (saat) \n **d** (gün)")
                                          .setTimestamp())
  
    kullanici.voice.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}ms`)
        .then(() =>
            message.channel.send(new Discord.MessageEmbed()
                                .setColor('00000')
                                .setDescription(`${kullanici} ${süre} süreliğine <@${message.author.id}> tarafından seste susturuldu.`)))
        .catch(console.error);
        setTimeout(() => {

        kullanici.voice.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
        message.channel.send(`${kullanici} Süresi dolduğu için mikrofonu açıldı. `)

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["seslisustur"],
    permLevel: 0
};

exports.help = {
    name: 'vmute',
    description: 'seslide susturur',
    usage: ""
};