const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js')

// Load .env variables
require('dotenv').config()
const token = process.env.BOT_TOKEN

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    // Set a new item in the collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command)
}

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
