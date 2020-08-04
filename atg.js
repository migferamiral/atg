const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.on("ready", async () => {

  console.log(
    `${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(
      client.guilds.cache.size
    )} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(
      client.users.cache.size.toLocaleString()
    )} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`
  );
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


// KODLAMA \\


// Sunucuya giren kişi DM;
client.on(`guildMemberAdd`, async member => {
  const e = new Discord.MessageEmbed()
  .setColor(`FF0000`)
  .setImage('https://cdn.discordapp.com/attachments/718151096966578257/718153915773878282/93764416_1498698196978267_4800277998035009536_o.jpg')
  .setDescription(`<a:tac:667004929516371969> **ATG Discord sunucusuna hoşgeldin.** 
       \n<a:tik2:729817704583790622> Seni aramızda gördüğümüze sevindik.    
        \n<a:discord:707924527249883197>  Arkadaşlarınızı davet etmek için linkimiz; https://discord.gg/ZaGTAVh`);
  member.send(e);
});
// Sunucuya giren kişi DM


///linkengel

client.on("message", msg => {
  const reklama = db.fetch(`linkK_${msg.channel.id}`)
  if (!reklama) return
  var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content) == true) {
    if (msg.member.hasPermission("ADMINISTRATOR")) {
      return;
    }
    
   msg.delete()
    const Embed = new Discord.MessageEmbed()
    .setColor("000000")
    .setDescription(`${msg.author} Bu kanalda link atmak yasaktır. <#729782039053860975> kanalında atabilirsiniz. ${client.emojis.cache.get("730512831107170335")}`)
    .setFooter("Developer by Wanted")
    msg.channel.send(Embed).then(m => { setTimeout(function(){  m.delete( ) }, 5000) });
  }
})

///linkengel

// Sunucuya giren kanal mesaj;
client.on('guildMemberAdd', async (member) => {

  let embed = new Discord.MessageEmbed();
const kullanıcıadı = member.user.username.replace(/\W/g, "");
const member2 = member.user;
let zaman = new Date().getTime() - member2.createdAt.getTime();
require("moment-duration-format");
const katilim = moment
  .utc(member.guild.members.cache.get(member.id).user.createdAt)
  .format("`YYYY [Yılında] MMMM [Ayında] dddd [Gününde] (DD/MM/YYYY)`");
const gecen = moment
  .duration(zaman)
  .format(`DD **[Gün]** HH **[Saat]** mm **[Dakika]** `);
let kayıt = client.guilds.cache.get(`655121499820261407`).channels.cache.get(`729786667082317904`)
let kişi = client.users.cache.get(member.id)
let memberinfo = {}

memberinfo.discord = moment.utc(member.guild.members.cache.get(member.id).user.createdAt).format(`DD/MM/YYYY`)
memberinfo.sunucu = moment.utc(member.guild.members.cache.get(member.id).joinedAt).format(`DD/MM/YYYY`)
var toplam = member.guild.memberCount.toString().replace(/ /g,"")
var us1 = toplam.match(/([0-9])/g)
toplam = toplam.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(us1) {
toplam = toplam.replace(/([0-9])/g, d => {
  return {
  "1": "<a:bir:712445135329165432>",
    "2": "<a:iki:712445135337816094>",
    "3": "<a:uc:712445135664971837>",
    "4": "<a:dort:712445135782412418>",
    "5": "<a:bes:712445134813266322>",
    "6": "<a:alti:712445135849259141>",
    "7": "<a:yedi:712445135467839528>",
    "8": "<a:sekiz:712445135253667851>",
    "9": "<a:dokuz:712445135530754068>",
    "0": "<a:sifir:712445135228502058>"}[d];
  })
}

let güvenli = new Discord.MessageEmbed()
.setColor(`ff0000`)
  .setDescription(`<a:katildi:712839682215510018> Hoşgeldin, **${member}** Seninle **${toplam}** Kişiyiz!     
    \n<a:sagok:718532048066969611> Kaydının yapılması için sesli odaya gelip ses vermen gerekli.    
   \n<a:sonsuz:700662966080766004>  <@&729794677079015456> Rolündeki yetkililer seninle ilgilenecektir.    
    \n<a:kilit:725072148560871431> Bu Kullanıcı: ${
      new Date().getTime() - member.user.createdAt.getTime() <
      7 * 24 * 60 * 60 * 1000
        ? "**Tehlikeli!** <a:kirmizi:700423343073001534>"
        : "**Güvenli!** <a:yesil:700423343370928248>"}`

  );


kayıt.send(güvenli)
});
// Sunucuya giren kanal mesaj

//sa-as

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('**Aleyküm Selam Hoşgeldin!**');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamün Aleyküm') {
    msg.reply('**Aleyküm Selam Hoşgeldin!**');
  }
});

client.on('message', msg => {
  if (msg.content === 'selamün aleyküm') {
    msg.reply('**Aleyküm Selam Hoşgeldin!**');
  }
});

client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('**Aleyküm Selam Hoşgeldin!**');
  }
});
client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('**Aleyküm Selam Hoşgeldin!**');
  }
});

client.login(ayarlar.token)