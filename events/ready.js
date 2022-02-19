// Called when application is ready to be used
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} has ascended.`)
	},
}