// Used to register commands on a Discord server
// "node deploy-commands.js"

// Load .env variables
require('dotenv').config()
const { BOT_TOKEN, GUILD_ID, CLIENT_ID } = process.env

import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Confirm that bot is working.'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
    .map(command => command.toJSON())

const rest = new REST({ version: '9' }).setToken(BOT_TOKEN)

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
