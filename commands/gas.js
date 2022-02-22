const { SlashCommandBuilder } = require('@discordjs/builders')
const etherscan = require('../api/etherscan')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gas')
        .setDescription('Returns estimated gas prices'),
    async execute(interaction) {
        etherscan.getGasPrice()
            .then(res => {
                interaction.reply(`Gas price: ${res} gwei`)
            })
    },
}
