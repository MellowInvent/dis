const Discord = require("discord.js")
const ms = require('ms');

exports.run = async(client,msg,args) => {
 var verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'yes'); // Define confirmation emoji
 let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
 var target = msg.mentions.users.first() || msg.guild.member.cache.get(args[0]);
 if(!target) return msg.reply('you need to mention a user to unmute')
var targetID = msg.guild.roles.cache.get(target.id)

var main = msg.guild.roles.cache.find(role => role.name === 'Verified');
var muteRole = msg.guild.roles.cache.find(role => role.name === 'Muted1');

targetID.roles.remove(muteRole)
targetID.roles.add(main)

var confirmation = new Discord.MessageEmbed()
.setColor('0x05ff4c')
.setDescription(`${verify} <@${targetID.user.id}> has been unmuted With id ${id} . 
sent evidence`)
msg.channel.send(confirmation);
}