const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'slowmode',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have **MANAGE_CHANNELS** permission!').then(m => m.delete({ timeout: 1 }));

        if (!args[0]) return message.channel.send('You did not specify a time!').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        var verify = message.guild.emojis.cache.find(Emoji => Emoji.name === 'yes');
        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Slowmode Disabled')
                .setColor('#00ff00')
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('not a valid time, please try again!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('That slowmode limit is too high, please enter anything lower than 6 hours.').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`yes i wil tottally change the slowmode thats the same r u twelve or somethin slowmmode is alreay set to \`${args[0]}\``).then(m => m.delete({ timeout: 5000 }));
        
        embed
        
        
        .setDescription(`${verify}slowmode set to \`${args[0]}\``)
        
    
        .setColor('#f2f2f2')

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}
