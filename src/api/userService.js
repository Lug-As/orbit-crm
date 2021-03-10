import axios from 'axios'

const UserPath = 'user'

export default {
	async fetchUser(token) {
		return axios.get(UserPath, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},
	async putUserInfo(type, value) {
		return axios.post(UserPath, {
			[type]: value,
		})
	},
}
