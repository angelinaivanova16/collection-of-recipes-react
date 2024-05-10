export function getKey(type) {
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

export function getData(key) {
	return localStorage.getItem(key);
}

export function removeDataFromLS(key) {
	localStorage.removeItem(key);
}