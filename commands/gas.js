const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gas')
        .setDescription('Returns estimated gas prices'),
    async execute(interaction) {
        await interaction.reply('Wow only 3 gwei!');
    },
};
