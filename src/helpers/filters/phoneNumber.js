export default (val, is = true) => {
	if (is && val.length === 10) {
		const chars = val.split('')
		chars.splice(0, '', '(')
		chars.splice(4, '', ') ')
		chars.splice(8, '', '-')
		chars.splice(11, '', '-')
		val = '8 ' + chars.join('')
	}
	return val
}
