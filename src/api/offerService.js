import axios from 'axios'

const OffersPath = 'offers'

const storeOffer = (offer) => {
	return axios.post(OffersPath, offer)
}

export default {
	async sendOffer(offer) {
		return await storeOffer(offer)
	},
}
