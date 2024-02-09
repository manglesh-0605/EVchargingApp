import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import rootReducer from "./reducers/index";

//The initial state of the store
const initlaState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initlaState,
    composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { store, persistor };