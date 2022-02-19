const { SlashCommandBuilder } = require('@discordjs/builders')
const axios = require('axios').default

// Load .env variables
require("dotenv").config()
const token = process.env.ETH_TOKEN

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gas')
        .setDescription('Returns estimated gas prices'),
    async execute(interaction) {
        axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${token}`)
            .then(res => {
                interaction.reply(`Gas Price: ${res.data.result.ProposeGasPrice} gwei`)
            })
            .catch(error => {
                console.error(error)
            })
    },
}
