import noticesService from '@/api/noticesService'

export default {
	state: {
		notices: [],
		noticesLoading: false,
		noticesPagination: {},
	},
	getters: {
		notices(state) {
			return state.notices
		},
		noticesLoading(state) {
			return state.noticesLoading
		},
		noticesPagination(state) {
			return state.noticesPagination
		},
	},
	mutations: {
		setNotices(state, payload) {
			state.notices = payload
		},
		setNoticesPagination(state, payload) {
			state.noticesPagination = payload
		},
		startNoticesLoading(state) {
			state.noticesLoading = true
		},
		stopNoticesLoading(state) {
			state.noticesLoading = false
		},
	},
	actions: {
		async loadNotices({commit}, {
			page = 1
		}) {
			commit('startNoticesLoading')
			const response = await noticesService.getNotices(page),
				result = response.data
			const noticesList = result.data.map(item => ({
				...item,
			}))
			delete result.data
			commit('setNoticesPagination', result)
			commit('setNotices', noticesList)
			commit('stopNoticesLoading')
		}
	}
}
