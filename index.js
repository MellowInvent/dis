// Define Crucial Variables
const config = require('./config.json');
const Discord = require('discord.js')
const ms = require('ms');
const client = new Discord.Client();
const Fs = require('fs')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://iyassiendiscord:12345678910Yy@yassienehabdb.84hjb.mongodb.net/Data',{
  useUnifiedTopology : true,

useNewUrlParser: true,

}).then(console.log('connected to data base'))





let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
client.on("guildMemberAdd", async (member) => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
  UserJSON[member.id] = {
                warns: 0
            }
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
})
let kilidWords = ["http"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(kilidWords[i])) {
await message.delete();
message.reply(", you are not allowed to send links in this channel. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Posting external links')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  console.log('f')
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})

let comlidWords = ['.com']
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(comlidWords[i])) {
await message.delete();
message.reply(", you are not allowed to send links in this channel. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Posting external links')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})


let fbadlidWords = ["fuc"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(fbadlidWords[i])) {
await message.delete();
message.reply(", Space World is a family friendly server, don't use that kind of language. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Using filtered words')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})

let lolbadlidWords = ["pussy"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(lolbadlidWords[i])) {
await message.delete();
message.reply(", Space World is a family friendly server, don't use that kind of language. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Using filtered words')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})



let badlidWords = ["ass","pussy","fuc","fuck"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(badlidWords[i])) {
await message.delete();
message.reply(", Space World is a family friendly server, don't use that kind of language. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Using filtered words')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})






let lidWords = [".gg",'.com',"http"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(lidWords[i])) {
await message.delete();
message.reply(", you are not allowed to send links in this channel. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Posting external links')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})

let badWords = ["nig","nigga"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(badWords[i])) {
await message.delete();
message.reply(", racism is not tolerated in Space World. Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] racial slurs')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})










let linksWords = [".com",".gg"]
client.on("message", async message => {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
for (i = 0; i < badWords.length; i++) {
    if(message.content.length >= 300) {
await message.delete();
message.reply(", you are not allowed to use spam  in chats.  Continuing will result in a mute.");
var ghembed = new Discord.MessageEmbed()
            .setColor('#0xffff00')
.setAuthor('Yassien\'s Utilities#6355', 'https://i.imgur.com/Q3WyilF.jpg')

    
.addField('You h\'ve been warned in Space World', 'You received a warning from the moderation system')

.addField('Reason', '[AutoMod] Posting large or annoying messages')
.addField('Expires', '24h')
.addField('Punishment ID', id)
.setTimestamp()
            

		// Sending embed to user that was warned
            try {
                message.author.send(ghembed);
            } catch(err) {
                console.warn(err);
            }
        

            var ghmuteembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} has been muted for continuous infractions.`)
            .setColor("RED")



            UserJSON[message.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));



if (UserJSON[message.author.id].warns === 3) {
 
(Fs.readFileSync("./DB/users.json"));
  UserJSON[message.author.id].warns = 0;
  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

  const user = message.member
  let role = message.guild.roles.cache.find(r => r.name === "Muted");
  message.reply(ghmuteembed);
  user.roles.add(role)
  setTimeout(async() => {
    user.roles.remove(role);
 }, ms('6h')) 
  console.log('f')
  var muserLog = new Discord.MessageEmbed()
  
  .addField('You where muted', 'You Where muted in **Space World**')
  .addField('Reason', '[AutoMod] 3 warnings.')
  .addField('Punishment ID', id)
 
 
  
  .addField('Time', '6h')
  .setColor('#CC7900')


  try {
      await message.author.send(muserLog);
  } catch(err) {
      console.warn(err);
  }

}
        }
    }
})



// Client ready message for console
client.on('ready',  async() => {
    console.log('I am online and ready to listen to commands!')
})
const activities_list = [
    " nofal is cool",
    " yassien is cool",
    " with my dog",
    " school is gay",
    " the world is burning",
    " deleting dirts blocks",
    " speed runinng with yassien",
    " life is gay",
    "fortnite with yassien ",
    " mincraft",
    " brawl stars"
];


client.on('ready', () => {
    setInterval(() => {
const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});



// Define your message parameter and run the rest of your code
client.on('message', async(msg) => {

    let id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
                
     
     
    
    // Filtered words array and actions

    
    
        // Define prefix and command handler
    
    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ')
    var cmd = args.shift().slice(prefix.length).toLowerCase();
    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);

    }catch(err) {
        console.warn(err);
    }

    
})
// Make your bot login
client.login(config.token);