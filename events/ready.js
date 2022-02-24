const etherscan = require('../api/etherscan')

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`${client.user.tag} has ascended.`)

		const ethPrice = () => etherscan.getPrice()
		const gasPrice = () => etherscan.getGasPrice()

		client.guilds.cache.each(async (snowflake, guildID) => {
			const guild = client.guilds.cache.get(guildID)
			const targetMember = guild.members.cache.get(client.user.id)
			targetMember.setNickname(`ETH $${await ethPrice()} CAD`)
		})

		// Set activity status to current gas price
		client.user.setActivity(`Gas: ${await gasPrice()} gwei`, { type: 'WATCHING' })

		// Set activity status to current gas price every 15 seconds
		setInterval(async () => {
			client.guilds.cache.each(async (snowflake, guildID) => {
				const guild = client.guilds.cache.get(guildID)
				const targetMember = guild.members.cache.get(client.user.id)
				targetMember.setNickname(`ETH $${await ethPrice()} CAD`)
			})
			client.user.setActivity(`Gas: ${await gasPrice()} gwei`, { type: 'WATCHING' })
		}, 15000)
	},
}