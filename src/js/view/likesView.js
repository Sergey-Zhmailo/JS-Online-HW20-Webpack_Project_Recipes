import {elements} from "./base";

// export const renderLikesRecipe = recipeData => {
//     const markup = `
//     <li class="likes__recipe" data-likes_list_recipy_id="${recipeData.recipe_id}">
//         <a class="likes__link" href="#${recipeData.recipe_id}">
//             <figure class="likes__fig">
//                 <img src="${recipeData.image_url}" alt="${recipeData.title}">
//             </figure>
//             <div class="likes__data">
//                 <h4 class="likes__name">${recipeData.title}</h4>
//                 <p class="likes__author">${recipeData.publisher}</p>
//             </div>
//             <button class="likes__delete btn-tiny">
//                 <svg>
//                     <use href="img/icons.svg#icon-circle-with-cross"></use>
//                 </svg>
//             </button>
//         </a>
//     </li>
//     `;
//
//     elements.likesList.insertAdjacentHTML('afterbegin', markup);
// };

export const renderLikesRecipeFromLocalStorage = recipeData => {
    const markup = `
    <li class="likes__recipe" data-likes_list_recipy_id="${recipeData.id}">
        <a class="likes__link" href="#${recipeData.id}">
            <figure class="likes__fig">
                <img src="${recipeData.img}" alt="${recipeData.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${recipeData.title}</h4>
                <p class="likes__author">${recipeData.author}</p>
            </div>
            <button class="likes__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </a>
    </li>
    `;

    elements.likesList.insertAdjacentHTML('afterbegin', markup);
};

export const removeRecipeFromLikesList = elem => {
    elem.remove();
};

export const clearLikesList = () => {
    elements.likesList.innerHTML = '';
};