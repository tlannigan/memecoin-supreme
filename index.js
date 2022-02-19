// Load .env variables
require('dotenv').config()
const token = process.env.BOT_TOKEN

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// On ready
client.once('ready', () => {
    console.log('Memecoin Supreme has ascended.')
})

// Authenticate with Discord
client.login(token)
