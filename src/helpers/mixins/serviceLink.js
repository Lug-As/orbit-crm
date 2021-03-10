const ServiceUrl = 'http://localhost:8081'

export default {
	methods: {
		serviceLink(path = '', addSlash = true) {
			return ServiceUrl + (addSlash ? '/' : '') + path
		},
	},
}
