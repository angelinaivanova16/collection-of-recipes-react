import { key, setDataToLS } from './../utils/localStorage';

export const MyMiddleware = state => next => action => {
	const { favorites } = state.getState();
	if (action.type === 'favorites/addToFavorites') {
		const favoriteRecipe = [...favorites.favoritesIds, action.payload];
		setDataToLS(key('favorites'), favoriteRecipe);
	}
	return next(action);
};