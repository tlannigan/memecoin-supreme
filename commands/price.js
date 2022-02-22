const { SlashCommandBuilder } = require('@discordjs/builders')
const etherscan = require('../api/etherscan')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('price')
        .setDescription('Returns the price of ETH'),
    async execute(interaction) {
        etherscan.getPrice()
            .then(res => {
                interaction.reply(`ETH price: $${res} CAD`)
            })
    },
}
