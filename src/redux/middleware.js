import { getKey, setDataToLS } from './../utils/localStorage';

export const MyMiddleware = state => next => action => {
	const { favorites } = state.getState();
	if (action.type === 'favorites/addToFavorites') {
		const favoriteRecipe = [...favorites.favoritesIds, action.payload];
		setDataToLS(getKey('favorites'), favoriteRecipe);
	}
	if (action.type === 'favorites/removeFromFavorites') {
		const favoriteRecipe = [...favorites.favoritesIds.filter((item) => item !== action.payload)];
		setDataToLS(getKey('favorites'), favoriteRecipe);
	}
	return next(action);
};