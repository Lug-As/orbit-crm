export default (rawList, key = 'name') => {
	if (!rawList) return ''
	const separator = ' / ',
		list = []
	rawList.forEach(function (item) {
		list.push(item[key])
	})
	return list.join(separator)
}
