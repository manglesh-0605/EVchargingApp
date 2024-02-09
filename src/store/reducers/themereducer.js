import { SET_THEME } from '../allactionsTypes';


const initialState = {
    isDark: false
};

export default function themeReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_THEME:
            return {
                ...state,
                isDark: payload,
            };
        default:
            return {
                ...state,
            };
    }
}
