export default (num) => {
	num = parseInt(num)
	const bitness = num.toString().length
	if (bitness > 6) {
		num = (num / 1000000).toFixed(1) + 'M'
	} else if (bitness > 3) {
		num = (num / 1000).toFixed(1) + 'K'
	}
	return num
}
