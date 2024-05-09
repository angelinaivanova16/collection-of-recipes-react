export function getKey(type) {
	return `${type}`;
}

export function getDataFromLS(key, array) {
	return JSON.parse(localStorage.getItem(key) ?? array);
}

export function setDataToLS(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}