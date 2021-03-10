import axios from 'axios'

const RequestsPath = 'requests'

const approvingRequestRequest = function (id) {
	return axios.post(RequestsPath + '/' + encodeURI(id) + '/approve')
}

export default {
	async approveRequest(id) {
		return await approvingRequestRequest(id)
	},
	async cancelRequest(id, fail_msg = '') {
		let data = null
		if (fail_msg) {
			data = {
				'fail_msg': fail_msg,
			}
		}
		return axios.post(RequestsPath + '/' + encodeURI(id) + '/cancel', data)
	},
}
