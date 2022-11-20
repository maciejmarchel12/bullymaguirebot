const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Brings out the commands of the bot'),
    async execute(interaction, client) { 
        await interaction.reply({ content: "You're trash! \n /bully command sends out a random quote \n /gif command sends out a random gif of Bully Maguire \n See ya, chump!"});
    }
}