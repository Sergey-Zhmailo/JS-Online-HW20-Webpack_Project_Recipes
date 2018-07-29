
export default class Likes {
    constructor(id, title, author, img) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.img = img;
    }

    getLikesList() {
        let likesList;
        if (!localStorage.getItem('likesList')) {
            likesList = [];
        } else {
            likesList = JSON.parse(localStorage.getItem('likesList'));
        }

        return likesList;
    }

    addToLikesList(recipeData) {
        const likesList = this.getLikesList();
        const newLikesItem = {
            id: recipeData.recipe_id,
            title: recipeData.title,
            author: recipeData.publisher,
            img: recipeData.image_url
        };
        let isId = likesList.some(oneRecipy => oneRecipy.id == newLikesItem.id);
        if (!isId) {
            likesList.push(newLikesItem);
            localStorage.setItem('likesList', JSON.stringify(likesList));
        } else {
            alert("Already added to favorites");
        }

    }

    removeFromLikesList(oneRecipeLikeid) {
        const likesList = this.getLikesList();
        for (let i = 0; i < likesList.length; i++) {
            if (likesList[i].id == oneRecipeLikeid) {
                likesList.splice(i, 1);
                localStorage.setItem('likesList', JSON.stringify(likesList));
            }
        }
    }
};