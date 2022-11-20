const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

const prefix = '>';

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
 ]
});

const config = require('./config.json')



client.on("ready", () => {
    console.log("Bot is online!");

    const activities = [
        'Bullying',
        'Putting Dirt into peoples eyes'
    ]
    
    setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)];
        client.user.setPresence({ activities: [{ name: `${status}`}]});
    }, 50000);
  
  })

    //client.user.setActivity('Testing', { type: "PLAYING" });
//client.user.setPresence({ activities: [{ name: 'Testing', type: "STREAMING", url: "" }], status: 'online' }); 

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    const bully = ["I'm gonna put some dirt in your eye!",
                    "Look at little Goblin Junior. Gonna cry?",
                    "I am really gonna enjoy this...",
                    "Take your hand off me. Now.",
                    "Who am I? You sure you want to know?",
                    "Sorry I'm late, its a Jungle out there.",
                    "Stings, doesn't it?",
                    "I missed the part where thats my problem",
                    "I'd love to shoot you some time.",
                    "Thats a cute outfit! Did your husband give it to you?",
                    "I dont wanna fight you Flash.",
                    "Now dig on this.",
                    "You're trash!",
                    "See ya, chump!",]

    const bullygifs = [ "https://tenor.com/view/spiderman-thats-it-gonna-cry-tobey-maguire-are-you-going-to-cry-gif-17698704",
                        "https://tenor.com/view/spiderman-tobeymaguire-imissedthepartwherethatsmyproblem-gif-9838697",]

    //Commands

    if (command === 'help') {
        message.channel.send("You're trash! \n >bully command sends out a random quote \n >gif command sends out a random gif of Bully Maguire \n See ya, chump!")
    }

    if (command === 'bully') {
        message.channel.send(bully[Math.floor(Math.random() * bully.length)]);
    }

    if (command === 'gif') {
        message.channel.send(bullygifs[Math.floor(Math.random() * bullygifs.length)]);
    }

 //Test command

    if (command === 'test') {
        message.channel.send("Bot is working!")
    }

   













})

client.login(config.token);