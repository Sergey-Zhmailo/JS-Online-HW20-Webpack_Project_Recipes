import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.shoppingItemsArr = [];
    }

    addItem(ingredient) {
        const newItem = {
            id: uniqid(),
            ingredientShoppingList: ingredient // текст самого ингредиента
        };
        this.shoppingItemsArr.push(newItem);
    }

    deleteItem(id) {

        for (let i = 0; i < this.shoppingItemsArr.length; i++) {
            if (this.shoppingItemsArr[i].id == id) {
                this.shoppingItemsArr.splice(i, 1);
                break;
            }
        }
    }
}