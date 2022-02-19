const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check bot status.'),
    async execute(interaction) {
        await interaction.reply('Alive and well :)');
    },
};
