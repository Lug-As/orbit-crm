import axios from 'axios'
import {cachedResults, setCacheResults} from '@/api/cache'

const AgesPath = 'ages'

const fetchAges = () => {
	return axios.get(AgesPath)
}

export default {
	async getAges() {
		const cachedResult = cachedResults(AgesPath, 'range')
		if (cachedResult !== null) {
			return cachedResult
		}
		const response = await fetchAges()
		const ages = response.data.data
		setCacheResults(AgesPath, ages)
		return ages
	},
}

