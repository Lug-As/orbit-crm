export default function auth({next, store}) {
	if (store.getters.authCheck) {
		return next()
	}
	return next({
		name: 'login',
	})
}
