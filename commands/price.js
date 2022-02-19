const { SlashCommandBuilder } = require('@discordjs/builders')
const axios = require('axios').default

// Load .env variables
require("dotenv").config()
const token = process.env.ETH_TOKEN

module.exports = {
    data: new SlashCommandBuilder()
        .setName('price')
        .setDescription('Returns the price of ETH'),
    async execute(interaction) {
        axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${token}`)
            .then(res => {
                interaction.reply(`ETH Price: $${res.data.result.ethusd}`)
            })
            .catch(error => {
                console.error(error)
            })
    },
}
