const { default: axios } = require('axios')

module.exports = {
    // Return exchange rate from USD to CAD
    async getCADRate() {
        const rateData = await axios.get('https://api.vatcomply.com/rates?base=USD')
        return rateData.data.rates.CAD
    },
}