const ServiceUrl = 'http://localhost:8081/'

export default {
	methods: {
		serviceLink(path = '') {
			return ServiceUrl + path
		},
	},
}
