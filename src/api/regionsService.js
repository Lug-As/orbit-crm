import axios from 'axios'
import {cachedResults, setCacheResults} from '@/api/cache'

const RegionsPath = 'regions'

const fetchRegions = () => {
	return axios.get(RegionsPath)
}

export default {
	async getRegions() {
		const cachedResult = cachedResults(RegionsPath)
		if (cachedResult !== null) {
			return cachedResult
		}
		const response = await fetchRegions()
		const regions = response.data.data
		setCacheResults(RegionsPath, regions)
		return regions
	},
}

