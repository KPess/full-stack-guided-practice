const initialState = {
    username: "",
    balance: null //Using null instead of 0 makes it clear that a user is not logged in, rather than maybe just having a 0 balance.
}


//constants
const SET_USERNAME = "SET_USERNAME";
const SET_BALANCE = "SET_BALANCE";

//action creators
export function setUsername(username) {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export function setBalance(balance) {
    return {
        type: SET_BALANCE,
        payload: balance
    }
}

//reducer
export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_BALANCE:
            return {
                ...state,
                balance: action.payload
            }
        
        default: return state;
    }
}