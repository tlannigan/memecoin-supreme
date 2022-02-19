const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js')

// Load .env variables
require('dotenv').config()
const token = process.env.BOT_TOKEN

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// Register event handlers
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
}

// Register commands
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    // Set a new item in the collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command)
}

// On ready
// client.once('ready', () => {
//     console.log('Memecoin Supreme has ascended.')
// })

// Handle bot commands
// client.on('interactionCreate', async interaction => {
//     if (!interaction.isCommand()) return

//     const command = client.commands.get(interaction.commandName);

//     if (!command) return

//     try {
//         await command.execute(interaction)
//     } catch (error) {
//         console.error(error)
//         await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
//     }
// })

// Authenticate with Discord
client.login(token)
