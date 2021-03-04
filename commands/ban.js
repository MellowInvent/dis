var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You can\'t use that!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot ban this person!');
    }
    var verify = msg.guild.emojis.cache.find(Emoji => Emoji.name === 'yes');
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('You need to give a reason!');
    let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    
    var embed = new Discord.MessageEmbed()
    .setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/2ItWQTj.jpg')
    .addField('You were banned', 'You where banned in **Space World**')
    .addField('Reason', reason, true)
    .addField('Punishment ID', id)
    .addField('Appeal', 'If you believe this punishment was unjustified,click [here](https://forms.gle/eoLBzpQmLTAJHE8y9)')
    .setTimestamp()
    .setColor('#F93A2F') 






    var banEmbed = new Discord.MessageEmbed()   
    .setDescription(`${verify}**${user}** has been **Banned** with ID \`${id}\` `) 
    .setFooter('sent evidence')
 
    .setColor('#00d166')


    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.guild.members.ban(user); // This should not be user.id like I said in my video. I made a mistake. Sorry! :)

    msg.channel.send(banEmbed);
}