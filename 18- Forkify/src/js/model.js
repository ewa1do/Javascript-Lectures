import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
}

export const loadRecipe = async function (id) {
    try {
        const {data} = await getJSON(`${API_URL}/${id}`);
        console.log(data);

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
        // Temp error handling
        console.error(`${err} 🔥🔥🔥`);
    }

    // console.log(recipe);
}