import { SET_DRAWER } from "../allactionsTypes";


const initialState = {
    drawerOpened: true
}
export default function DrawerReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_DRAWER:
            return {
                ...state,
                drawerOpened: payload
            };
        default:
            return {
                ...state,
            };

    }

}