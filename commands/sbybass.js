var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!').then(m => m.delete({ timeout: 1}));   

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('They aren\'t in the server!');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('You need to give a reason!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');
    let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);



var verify = msg.guild.emojis.cache.find(Emoji => Emoji.name === 'yes');



    var log = new Discord.MessageEmbed()
    .setTitle('User Warned')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)
    .addField('Reason:', 'bypassing')
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Celi,s mod ')
    
    .addField('You h\'ve been warned in the gaming server', 'You received a warning from the moderation system')
  
    .addField('Reason', 'posting lartge or spam text or/bypassing auto mod spam')
    .addField('Expires', '24h')
    .addField('Punishment ID', id)
    .setTimestamp()
    .setColor('#F8C300')





    var exampleEmbed = new Discord.MessageEmbed()
    .setDescription(`${verify}${user}has been **Warned** with id \`${id}\` 
    ${user}check your **DMs** for information`)
    .setColor('#0xffff00')
    


    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
    msg.channel.send(exampleEmbed);
   
}