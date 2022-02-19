// Used to register commands on a Discord server
// "node deploy-commands.js"

const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

// Load .env variables
require('dotenv').config()
const { BOT_TOKEN, GUILD_ID, CLIENT_ID } = process.env

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(BOT_TOKEN)

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
