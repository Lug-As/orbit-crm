import axios from 'axios'

const RequestsPath = 'requests'

const storeRequest = (request) => {
	const formData = new FormData()
	Object.keys(request)
		.forEach(key => {
			let item = request[key]
			if (key === 'ad_types') {
				for (let i = 0; i < item.length; i++) {
					formData.append(key + '[' + i + '][id]', item[i].id)
					if (item[i].price) {
						formData.append(key + '[' + i + '][price]', item[i].price)
					}
				}
			} else if (Array.isArray(item)) {
				for (let i = 0; i < item.length; i++) {
					formData.append(key + '[' + i + ']', item[i])
				}
			} else {
				formData.append(key, item)
			}
		})
	return axios.post(RequestsPath, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	})
}

const fetchRequests = (page) => {
	return axios.get(RequestsPath + '/my', {
		params: {
			page: encodeURI(String(parseInt(page))),
		},
	})
}

export default {
	async sendRequest(request) {
		return await storeRequest(request)
	},
	async getRequests(page = 1) {
		return await fetchRequests(page)
	},
	async deleteRequest(id) {
		return axios.delete(RequestsPath + '/' + encodeURI(id))
	},
}
