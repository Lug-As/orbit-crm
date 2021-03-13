const ServiceUrl = 'https://orbitaa.ru'

export default {
	methods: {
		serviceLink(path = '', addSlash = true) {
			return ServiceUrl + (addSlash ? '/' : '') + path
		},
	},
}
