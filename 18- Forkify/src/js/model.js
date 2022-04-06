import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
    },
}

export const loadRecipe = async function (id) {
    try {
        const {data} = await getJSON(`${API_URL}${id}`);

        const { recipe } = data;

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }
    } catch (err) {
        console.error(`${err} 🔥🔥🔥`);
        throw err;
    }
}


export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);
        const { recipes } = data.data;

        state.search.results = recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        });
        console.log(data);
    } catch (err) {
        console.error(`${err} 🔥🔥🔥`);
        throw err;
    }
}

// loadSearchResults('pizza');