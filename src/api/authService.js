import axios from 'axios'

const loginRequest = (userData) => {
	return axios.post('login', userData)
}
export default {
	async login(userData) {
		return await loginRequest(userData)
	},
}
