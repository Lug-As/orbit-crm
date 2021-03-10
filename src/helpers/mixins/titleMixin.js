function getTitle(vm) {
	const {title} = vm.$options
	if (title) {
		return typeof title === 'function'
			? title.call(vm)
			: title
	}
}

const SUFFIX = ' — Orbita'

export default {
	created() {
		const title = getTitle(this)
		if (title) {
			this.$setPageTitle(title)
		}
	},
	methods: {
		$setPageTitle(title) {
			document.title = title + SUFFIX
		},
	},
}
