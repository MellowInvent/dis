const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then(m => m.delete({ timeout: 1 }));

        if (!args[0]) return message.channel.send('please enter a users id to unban!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
        }
        let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        
        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {2010222

            const user = bans.find(ban => ban.user.id === member.id );
            var verify = message.guild.emojis.cache.find(Emoji => Emoji.name === 'yes');
            if (user) {
                embed.setDescription(`${verify}${user.user.tag} has been unbanned with id \`${id}\``)
                
                    .setColor('#00ff00')
                    
                    
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`User ${member.tag} isn't banned!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('An error has occurred!')
        });   

    }
}