const Discord = require("discord.js");
const client = new Discord.Client();

const mod_citation = '588358455883071501'
const citation = '588358482563170314'

const prefix = '!'

client.login('NTg4MzU1OTkxMTg4Mjc1MjMy.XQJRyw.XNjokDE1SH57y3YnBn59cN6ohX8');

client.on('ready', () => {
  client.user.setActivity("Sucer chatom", { type: "PLAYING" });
});

const roletable = [
  'Fornite', 
  'Rainbox Six Siège'
];
const roleid = [
  '191991919191',
  '1919191919191111111'
];

client.on('presenceUpdate', (oldMember, newMember) => {
  if (newMember.presence.game) {
    if (roletable.indexOf(newMember.presence.game.name) > -1) {
      console.log(roleid[roletable.indexOf(newMember.presence.game.name)]);
    }
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "citation") {
    msg.reply('Votre citation vient d\'être envoyer au modérateurs...');
    msg.delete();
    const embed = {
      "title": "Requête par "+msg.author.id+".",
      "color": 14759923,
      "timestamp": Date.now(),
      "footer": {
        "icon_url": msg.author.avatarURL,
        "text": "Citation de \""+msg.author.username+"\""
      },
      "author": {
        "name": msg.author.username,
        "url": msg.author.avatarURL,
        "icon_url": msg.author.avatarURL
      },
      "fields": [
        {
          "name": msg.author.username+" :",
          "value": msg.author.content.replace('!'+command)
        }
      ]
    };
    client.channels.get(mod_citation).send({ embed });
  }
});

