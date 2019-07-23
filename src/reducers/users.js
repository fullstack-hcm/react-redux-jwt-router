const initState = {
    username: '',
    token: ''
}
/**
 * 
 * @param {*} state 
 * @param {*} action { type: '', payload: {} }
 */
export default function userReducer(state = initState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESSED': 
            return {
                username: action.payload.username,
                token: action.payload.token,
            };
        default:
            return state;
    }
}