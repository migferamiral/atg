﻿const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!message.member.roles.cache.has("729776917435383839"))
  return message.channel.send("> Bu komutu sadece **Yetkili** rolüne sahip kişiler kullanabilir.").then(m => { setTimeout(function(){  m.delete( ) }, 7000) }); 
  if(message.channel.id != "729781197068042281")
  return message.channel.send("> Bu komutu <#729781197068042281> kanalında kullanınız!").then(m => { setTimeout(function(){  m.delete( ) }, 7000) }); 
    const user = message.mentions.users.first() || message.author;
    let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Mesaj atabilmem saati yazmalısın.');
    message.delete();
    const duyuru = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setAuthor('')
    .setDescription(`<a:ykirmizi:730512831107170335> **Çıkış** : ${mesaj} \n Yetkili : ${user}`)
    return message.channel.send(duyuru);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ç'],
  permLevel: 0
};

exports.help = {
  name: 'çıkış',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
