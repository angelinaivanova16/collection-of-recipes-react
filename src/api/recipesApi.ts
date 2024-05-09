import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type RecipesResponse = {
  recipes: Recipe[];
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
    getRecipes: build.query<RecipesResponse, void>({
      query: () => ({
        url: 'recipes'
      }),
      // transformResponse: response => response.data.recipes // здесь пока ошибка с типами
    }),
    getDescription: build.query({
      query: id => {
        return {
          url: `recipes/${id}`
        };
      },
      // transformResponse: response => response
    }),
  }),
  tagTypes: ['Recipes'],
})

export const {
  useGetRecipesQuery,
  useGetDescriptionQuery,
} = recipesApi;