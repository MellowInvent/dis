const Discord = require("discord.js"); // Require important constants
const ms = require('ms');


exports.run = async(client, msg, args) => {
    var logs = msg.guild.channels.cache.find(c => c.name === 'logs'); // Define logging channel
    var verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'yes'); // Define confirmation emoji
    let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return; // Check for required permissions
    
    var target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!target) return msg.reply('you need to mention a user for me to mute them!')

    var main = msg.guild.roles.cache.find(role => role.name === 'Verified'); // Main role that you have
    var muteRole = msg.guild.roles.cache.find(role => role.name === 'Muted1'); // Your mute role
    var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('You need to give a reason!');
    var targetID = msg.guild.members.cache.get(target.id)
 
    if(!args[1]) {
        
        targetID.roles.add(muteRole)
        targetID.roles.remove(main)
        var confirmation = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${verify} <@${targetID.user.id}> has been **hardMuted** With id \`${id} \`. 
    <@${targetID.user.id}> check Your DMs for information`)

        msg.channel.send(confirmation);
        msg.delete()
      
        var log = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} <@${targetID.user.id}> has been **hard-muted** by ${msg.author}. They will not be unmuted until you unmute them manually!`)
    logs.send(log);

    var userLog = new Discord.MessageEmbed()
    
    .setColor('0x05ff4c')
    
    .addField('You where hard muted', 'You Where hard muted in **Space world**')
    .addField('Reason', reason, true)
    .addField('Punishment ID', id)
   
    .setTimestamp()
    
    .addField('Time', 'until a mod unmute you')
    .setColor('#CC7900')


    

    try {
        await target.send(userLog);
    } catch(err) {
        console.warn(err);
    }

    
        return
    }
    
    targetID.roles.add(muteRole)
    targetID.roles.remove(main)
    
    var confirmation = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} <@${targetID.user.id}> has been **Muted** With id \`${id} \`. 
    <@${targetID.user.id}> check Your DMs for information`)
    msg.delete()
      
    msg.channel.send(confirmation);

    
    var log = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} <@${targetID.user.id}> has been muted by ${msg.author} for ${ms(ms(args[1]))}.`)
    logs.send(log);

    var userLog = new Discord.MessageEmbed()
    .setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/2ItWQTj.jpg')
    .addField('You where muted', 'You Where muted in **Space World**')
    .addField('Reason', reason)
    .addField('Punishment ID', id)
   
    .setTimestamp()
    
    .addField('Time', ms(ms(args[1])))
    .setColor('#CC7900')


    try {
        await target.send(userLog);
    } catch(err) {
        console.warn(err);
    }

    setTimeout(function () {
        targetID.roles.remove(muteRole)
        targetID.roles.add(main)
    } , ms(args[1]));

}