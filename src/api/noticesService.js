import axios from 'axios'

const NoticesPath = 'notifications'

const fetchNotices = (page = 1) => {
	return axios.get(NoticesPath, {
		params: {
			page: encodeURI(String(parseInt(page))),
		},
	})
}

export default {
	async getNotices(page = 1) {
		return await fetchNotices(page)
	},
}
