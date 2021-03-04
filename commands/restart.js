module.exports = {
    name: "restart",
    category: "commands",
    run: async (client, message, args) => {
        if (message.author.id !== '731139228120907846') {
            return message.channel.send(`You cannot use this command!`).then(m => m.delete({ timeout: 1}));   
        }
        await message.channel.send(`Restarting...`)
        process.exit();
    }
}