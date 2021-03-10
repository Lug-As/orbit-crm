export default function guest({next, store}) {
	if (store.getters.guestCheck) {
		return next()
	}
	return next({
		name: 'dashboard',
	})
}
