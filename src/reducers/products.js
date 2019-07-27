const initState = {
    listProducts: [],
}
/**
 * 
 * @param {*} state 
 * @param {*} action { type: '', payload: {} }
 */
export default function userReducer(state = initState, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCTS': 
            return {
                ...state,
                listProducts: action.payload
            };
        case 'ADD_PRODUCT': {
            return {
                ...state,
                listProducts: [...state.listProducts, action.payload]
            }
        }
        default:
            return state;
    }
}