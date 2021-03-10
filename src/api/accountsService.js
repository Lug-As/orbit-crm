import axios from 'axios'

const AccountsPath = 'accounts'

export default {
	async fetchAccount(id) {
		return axios.get(AccountsPath + '/' + encodeURI(id))
	},
	async fetchAccounts(page = 1, params = {}) {
		for (let key in params) {
			if (Array.isArray(params[key])) {
				params[key] = params[key].join(',')
			}
		}
		return axios.get(AccountsPath, {
			params: {
				...params,
				page: encodeURI(String(parseInt(page))),
			},
		})
	},
	async fetchUserAccounts() {
		return axios.get(AccountsPath + '/own')
	},
	async deleteAccount(id) {
		return axios.delete(AccountsPath + '/' + encodeURI(id))
	}
}

