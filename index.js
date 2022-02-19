// Load .env variables
require('dotenv').config()
const token = process.env.BOT_TOKEN

// Require the necessary discord.js classes
const { Client, Intents, Interaction } = require('discord.js')

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// On ready
client.once('ready', () => {
    console.log('Memecoin Supreme has ascended.')
})

// Handle bot commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return
    
    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Alive and well :)');
    }
})

// Authenticate with Discord
client.login(token)
