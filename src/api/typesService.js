import axios from 'axios'
import {cachedResults, setCacheResults} from '@/api/cache'

const TypesPath = 'types'

const fetchTypes = () => {
	return axios.get(TypesPath)
}

export default {
	async getTypes() {
		const cachedResult = cachedResults(TypesPath)
		if (cachedResult !== null) {
			return cachedResult
		}
		const response = await fetchTypes()
		const types = response.data.data
		setCacheResults(TypesPath, types)
		return types
	},
}

