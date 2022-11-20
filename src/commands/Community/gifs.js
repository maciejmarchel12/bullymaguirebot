const { SlashCommandBuilder } = require('@discordjs/builders');

const bullygifs = [ 
            "https://tenor.com/view/spiderman-thats-it-gonna-cry-tobey-maguire-are-you-going-to-cry-gif-17698704",
            "https://tenor.com/view/spiderman-tobeymaguire-imissedthepartwherethatsmyproblem-gif-9838697",
            "https://tenor.com/view/spider-man3-emo-peter-parker-bully-maguire-ooh-i-protected-you-in-high-school-now-i-am-gonna-kick-your-little-ass-gif-20918941",
            "https://tenor.com/view/tobey-maguire-spider-man-tobey-maguire-you-shouldve-thought-of-that-earlier-tobey-you-shouldve-thought-of-that-earlier-spider-man-you-shouldve-thought-of-that-earlier-bully-maguire-gif-23937484",
            "https://tenor.com/view/bully-maguire-tobet-maguire-tobey-maguire-christopher-luisi-alper-bozkurt-gif-24182673",
            "https://tenor.com/view/tobey-maguire-spiderman-gif-24594853",
            "https://tenor.com/view/tobey-maguire-spider-man-dance-nice-gif-14997395",
]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gif')
    .setDescription('Sends a random Bully Maguire gif'),
    async execute(interaction, client) { 
        await interaction.reply({ content: bullygifs[Math.floor(Math.random() * bullygifs.length)]});
    }
}