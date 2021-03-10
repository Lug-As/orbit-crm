export default {
	/**
	 * @returns {String|null} Token
	 * */
	getToken() {
		return localStorage.getItem(this.tokenName)
	},

	isTokenSet() {
		return this.getToken() !== null
	},

	/**
	 * @param {String} token
	 * */
	setToken(token) {
		localStorage.setItem(this.tokenName, String(token).trim())
	},

	clearToken() {
		localStorage.removeItem(this.tokenName)
	},

	get tokenName() {
		return 'auth-token'
	},
}
