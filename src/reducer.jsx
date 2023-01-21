export const initialState = {
    bascket: []
}

export const actionTypes = {
    ADD_TO_BASCKET: "ADD_TO_BASCKET"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
}

export default reducer;