import axios from 'axios'

const ResponsesPath = 'responses'

const storeResponse = (response) => {
	return axios.post(ResponsesPath, response)
}
const fetchProjectAccountResponse = (projectId, accountId) => {
	return axios.get(ResponsesPath + `/project/${projectId}/account/${accountId}`)
}

export default {
	async sendResponse(response) {
		return await storeResponse(response)
	},
	async getProjectAccountResponse(projectId, accountId) {
		return await fetchProjectAccountResponse(projectId, accountId)
	},
}
