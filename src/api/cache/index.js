const validFormat = (result, key = 'name') => {
	let valid = true
	if (!Array.isArray(result) || !result.length) {
		return false
	}
	result.forEach(item => {
		if (item === null || typeof item !== 'object' || item['id'] === undefined || item[key] === undefined) {
			valid = false
		}
	})
	return valid
}

export function cachedResults(cacheKey, key = 'name') {
	const storageItem = sessionStorage.getItem(cacheKey)
	let result
	try {
		result = JSON.parse(storageItem)
		if (!validFormat(result, key)) {
			throw new Error('Неверный формат кэшированных данных')
		}
	} catch (e) {
		sessionStorage.removeItem(cacheKey)
		result = null
	}
	return result
}

export function setCacheResults(cacheKey, val) {
	sessionStorage.setItem(cacheKey, JSON.stringify(val))
}
