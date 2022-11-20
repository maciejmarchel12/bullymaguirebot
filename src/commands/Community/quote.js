const { SlashCommandBuilder } = require('@discordjs/builders');

const bully = [
            "I'm gonna put some dirt in your eye!",
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
            "See ya, chump!",
            "Something's different, I'll figure it out, stop lecturing me, please!",
            "I had to beat an old lady with a stick to get these cranberries.",
            "Thanks, hot legs!",
            "Go flock yourself, feather face!",
            "Good riddance!",
            "You want forgiveness? Get religion.",
            "Fly!",
            "How'd that get in there?",
            "My back... Oh, my back!",
            "Shazam!",
            "Up up and away web!",
            "Staff job. Double the money.",
            "Got any with nuts in them? Go make me some!",
            "Get me some milk.",
            "He despised you. You were an embarassment to him.",
            "You'll get you your rent when you fix this damn door!",
            "You should've thought of that earlier.",
            "I never thought he'd really do that!",
            "You got my name wrong!",
            "This is something else!",
            "We always have a choice, you had a choice when you killed my Uncle.",
            "Work out, plenty of rest. You know, eat your green vegetables.",
            "What about my Uncle? Did you give him a chance?! Did you?!",
            "A hundred bucks? The ad said three thousand.",
            "I can't see! there are cars in the way motherf*ker!",
        ]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bully')
    .setDescription('Grabs a random Bully Maguire quote'),
    async execute(interaction, client) { 
        await interaction.reply({ content: bully[Math.floor(Math.random() * bully.length)]});
    }
}