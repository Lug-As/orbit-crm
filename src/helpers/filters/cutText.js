export default (text, maxChars = 400) => {
	let sliced = text.slice(0, maxChars)
	if (sliced.length < text.length) {
		sliced += '...'
	}
	return sliced
}
