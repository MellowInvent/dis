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

    

    if(msg.author.id === user.id) return msg.reply('you cannot warn yourself!');
    let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);



    var verify = msg.guild.emojis.cache.find(Emoji => Emoji.name === 'yes');
    

    var warnEmbed = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${verify}${user}has been **Warned** with id \`${id}\` 
        ${user}check your **DMs** for information`)
        
      var sendEm = await msg.channel.send(warnEmbed);
       msg.delete()
      
       
var embed = new Discord.MessageEmbed()
.setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/2ItWQTj.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', 'Continuing to spam useless letters and symbols or repeating the same message.')
.addField('Expires', '30d')
.addField('Punishment ID', id)
.setTimestamp()



    try {
    user.send(embed);
    } catch(err) {
    console.warn(err);
        }
        }




        