export const initialState = {
    basket: [],
};

let basketValues = [];
//basketValues = initialState.basket.match(/\d+(?:\.\d+)?/g).map(Number)


// function stringToFloat(basket) {
//     for (let i = 0; i < basket.length; i++) {
//         basket[i] = parseFloat(basket[i]);
//     }
// }

// Selector
export const getBasketTotal = (basketValues) =>
    basketValues.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Can't remove item (id: ${action.id}) as it is not in basket.`
                );
            }

            return {
                ...state, 
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;