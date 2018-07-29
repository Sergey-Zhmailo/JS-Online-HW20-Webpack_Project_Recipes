// Global app controller
import Search from './models/Search';
import Recipe from './models/recipe';
import {elements, renderLoader, clearLoader} from "./view/base";
import * as searchView from "./view/searchView";
import * as recipeView from "./view/recipeView";
import List from './models/list';
import * as listView from './view/listView';
import Likes from './models/likes';
import * as likesView from './view/likesView';

/* Global state of the APP
* - Search object
* - Current recipe object
* - Shopping list object
* - Favorite list object
* */
const state = {};

// Search controller
const controlSearch = async () => {
    // 1. получаем данные из view
    const query = searchView.getSearchInputValue();

    if (query) {
       // 2. созд объект Search
        state.search = new Search(query);

        // 3. подготовим UI для результата
        searchView.clearForm();
        searchView.clearResult();
        renderLoader(elements.searchRes);
        // 4. делаем поиск рецепта
        await state.search.getResult();

        // 5. render result
        searchView.renderResult(state.search.result);
        clearLoader();
    }
};

// Set events
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResult();
        searchView.renderResult(state.search.result, goToPage);
    }
});

// Recipe controller
const controlRecipe = async () => {
    // Get id from url
    const id = window.location.hash.replace('#', '');

    if (id) {

        if (state.search) searchView.highLightSelected(id);
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        // create new recipe obj
        state.recipe = new Recipe(id);
        // get recipe data
        await state.recipe.getRecipe();

        clearLoader();
        recipeView.renderRecipe(state.recipe.result);
        controlList();
        controlLikes();
    }
};

// List controller
const controlList = function() {
    let addToShoppingListBtn = document.querySelector('.recipe__btn');
    let stateIngredientsList = state.recipe.result.ingredients;

    addToShoppingListBtn.addEventListener('click', function () {
        if (state.list) {
            stateIngredientsList.forEach(ingredient => {
                state.list.addItem(ingredient);
            });
        } else {
            state.list = new List();
            stateIngredientsList.forEach(ingredient => {
                state.list.addItem(ingredient);
            });
        }
        state.list.shoppingItemsArr.forEach(e => {
            listView.renderListIngredient(e);

            let deleteFromShoppingListBtn = document.querySelector('.shopping__delete');

            deleteFromShoppingListBtn.addEventListener('click', e => {
                let deleteId = e.target.closest('.shopping__item').dataset.shopping_list_id;
                state.list.deleteItem(deleteId);
                listView.deleteShoppingListItem(e.target.closest('.shopping__item'));
            });
        });
    });
};

// Likes controller
state.likes = new Likes();
const controlLikes = function() {
    let addToLikesListBtn = document.querySelector('.recipe__love');
    let stateRecipeDataForAddToLikes = state.recipe.result;

    addToLikesListBtn.addEventListener('click', function () {

        state.likes.addToLikesList(stateRecipeDataForAddToLikes);
        // likesView.renderLikesRecipe(stateRecipeDataForAddToLikes);
        likesView.clearLikesList();
        state.likes.getLikesList().forEach(oneLike => {
            likesView.renderLikesRecipeFromLocalStorage(oneLike)
        });
    });

};
// Load likes from Local Storage
state.likes.getLikesList().forEach(oneLike => {
    likesView.renderLikesRecipeFromLocalStorage(oneLike)
});
document.addEventListener('click', e => {
    const removeFromLikesListBtn = e.target.closest('.likes__delete');
    if (removeFromLikesListBtn) {
        let deleteId = e.target.closest('.likes__recipe').dataset.likes_list_recipy_id;
        state.likes.removeFromLikesList(deleteId);
        likesView.removeRecipeFromLikesList(e.target.closest('.likes__recipe'));

    }
});

window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);


