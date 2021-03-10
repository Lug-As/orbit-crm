import axios from 'axios'
import {cachedResults, setCacheResults} from '@/api/cache'

const TopicsPath = 'topics'

const fetchTopics = () => {
	return axios.get(TopicsPath)
}

export default {
	async getTopics() {
		const cachedResult = cachedResults(TopicsPath)
		if (cachedResult !== null) {
			return cachedResult
		}
		const response = await fetchTopics()
		const topics = response.data.data
		setCacheResults(TopicsPath, topics)
		return topics
	},
}

