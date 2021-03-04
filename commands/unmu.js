const Discord = require("discord.js")
const ms = require('ms');

exports.run = async(client,msg,args) => {
 var verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'yes'); // Define confirmation emoji
 let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
 var user = msg.mentions.users.first() || msg.guild.member.cache.get(args[0]);
 if(!target) return msg.reply('you need to mention a user to unmute')
var targetID = msg.guild.roles.cache.get(target.id)

let role = message.guild.roles.cache.find(r => r.name === "muted");
let srole = message.guild.roles.cache.find(r => r.name === "Verified");
user.roles.add(srole)

user.roles.remove(role)
var confirmation = new Discord.MessageEmbed()
.setColor('0x05ff4c')
.setDescription(`${verify} ${user} has been **unmuted** With id \`${id} \`. 
sent evidence`)
msg.channel.send(confirmation);
}











