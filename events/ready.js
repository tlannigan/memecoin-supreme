const etherscan = require('../api/etherscan')

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`${client.user.tag} has ascended.`)

		const gasPrice = () => etherscan.getGasPrice()

		// Set activity status to current gas price
		client.user.setActivity(`Gas Price: ${await gasPrice()} gwei`, { type: 'WATCHING' })

		// Set activity status to current gas price every 60 seconds
		setInterval(async () => {
			client.user.setActivity(`Gas Price: ${await gasPrice()} gwei`, { type: 'WATCHING' })
		}, 60000)
	},
}