const axios = require('axios').default

// Load .env variables
require("dotenv").config()
const token = process.env.ETH_TOKEN

// Set status to ETH gas price
async function setGasStatus(client) {
	axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${token}`)
		.then(res => {
			client.user.setActivity(`Gas Price: ${res.data.result.ProposeGasPrice} gwei`, { type: 'WATCHING' })
		})
		.catch(error => {
			console.error(error)
		})
}

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`${client.user.tag} has ascended.`)
		setGasStatus(client)
		setInterval(() => setGasStatus(client), 10000)
	},
}