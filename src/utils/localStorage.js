export function key(type) {
	const user = JSON.parse(localStorage.getItem('isAuth') ?? '[]');
	if (user) {
		return `${user} ${type}`;
	} else {
		return '';
	}
}

export function getDataFromLS(key, array) {
	return JSON.parse(localStorage.getItem(key) ?? array);
}

export function setDataToLS(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}