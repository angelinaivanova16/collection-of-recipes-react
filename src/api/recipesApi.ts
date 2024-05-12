import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type RecipesResponse = {
  recipes: Recipe[];
  length: number;
};

export type Recipe = {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: build => ({
    getRecipes: build.query<Recipe[], void>({
      query: () => ({
        url: 'recipes'
      }),
      transformResponse: (response: RecipesResponse) => response.recipes
    }),

    getDescription: build.query({
      query: id => {
        return {
          url: `recipes/${id}`
        };
      },
    }),

    getRecipesBySearch: build.query<Recipe[], string>({
      query: (query: string) => {
        return `recipes/search?q=${query}`;
      },
      transformResponse: (response: RecipesResponse) => response.recipes,
    }),
  }),
  tagTypes: ['Recipes'],
})

export const {
  useGetRecipesQuery,
  useGetDescriptionQuery,
  useGetRecipesBySearchQuery,
} = recipesApi;