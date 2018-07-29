import {elements} from "./base";

export const renderListIngredient = ingredient => {
    const markup = `
        <li class="shopping__item" data-shopping_list_id="${ingredient.id}">
            <p class="shopping__description">${ingredient.ingredientShoppingList}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;

    elements.shoppingList.insertAdjacentHTML('afterbegin', markup);
};

export const deleteShoppingListItem = elem => {
    elem.remove();
};