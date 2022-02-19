const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Alive and well :)'),
    async execute(interaction) {
        await interaction.reply('Alive and well :)');
    },
};
