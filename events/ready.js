const axios = require('axios').default

// Load .env variables
require("dotenv").config()
const token = process.env.ETH_TOKEN

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} has ascended.`)
		// Set status to ETH gas price
		axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${token}`)
            .then(res => {
                client.user.setActivity(`Gas Price: ${res.data.result.ProposeGasPrice} gwei`, { type: 'WATCHING'})
            })
            .catch(error => {
                console.error(error)
            })
	},
}