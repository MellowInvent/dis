// Require Discord JS
 
const Discord = require('discord.js');
 
// Run Command Handler And Code
 
exports.run = async(client, msg, args) => {
if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('You didn\'t mention anyone!');
 
    var member;
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
if(!member) return msg.reply('The user that you mentioned isn\'t in the server');

var punreason = args.splice(1).join(' ');
    if(!punreason) return msg.reply('you need to add the id of punishment');
    
var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('you need to add a reason for me to temove the punishment!');
    if(msg.author.id === user.id) return msg.reply('you cannot remove punshment for yourself!');
    let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);



    var verify = msg.guild.emojis.cache.find(Emoji => Emoji.name === 'yes');
    

    var warnEmbed = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${verify}${user} punishment has been **removed** with id \`${id}\` 
        ${user}check your **DMs** for information`)
        
      var sendEm = await msg.channel.send(warnEmbed);
       msg.delete()
      
       
var embed = new Discord.MessageEmbed()
.setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('Your punishment was removed.', 'Your punishment was removed in Space World')
.addField('punishment', punreason)
.addField('Reason', reason)





    try {
    user.send(embed);
    } catch(err) {
    console.warn(err);
        }
        }




        