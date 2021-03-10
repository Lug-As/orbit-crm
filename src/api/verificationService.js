import axios from 'axios'

const resendRequest = () => axios.post('email/resend')

const verificationRequest = (id, hash, expires, signature) => {
	return axios.post('email/verify/' + String(id) + '/' + String(hash), null, {
		params: {
			'expires': String(expires),
			'signature': String(signature),
		},
	})
}

export default {
	async resendEmailVerification() {
		return await resendRequest()
	},
	async verifyEmail(id, hash, expires, signature) {
		return await verificationRequest(id, hash, expires, signature)
	},
}
