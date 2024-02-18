
import { GET_USER_DETAILS, LOGIN_SUCCESS, LOGOUT, UPDATE_USER_DETAILS } from '../actions/types';

const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                user: payload.userDetails,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,

            };
        case GET_USER_DETAILS:
            return {
                ...state,
                user: payload
            };
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                user: payload
            };
    }
    return state;
}
