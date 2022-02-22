const axios = require('axios').default
const { getCADRate } = require('./currencyrates')

module.exports = {
    // Return price of ETH in CAD$
    async getPrice() {
        try {
            const cadRate = await getCADRate()
            const ethData = await axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETH_TOKEN}`)
            const ethPrice = ethData.data.result.ethusd
            const cadPrice = cadRate * ethPrice
            return cadPrice.toFixed(2)
        } catch (error){
            console.error(error.toJSON())
            return 'ETHERSCAN UNREACHABLE'
        }
    },
    // Return proposed ETH gas prices in gwei
    async getGasPrice() {
        const ethData = await axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.ETH_TOKEN}`)
        return ethData.data.result.ProposeGasPrice
    },
}