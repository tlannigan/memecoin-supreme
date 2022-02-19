const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('price')
        .setDescription('Returns the price of ETH'),
    async execute(interaction) {
        await interaction.reply('Damn $6000 USD! To the moon!');
    },
};
