import { combineReducers } from "redux";
import themereducer from './themereducer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";



const themePersistConfig = {
    key: 'theme',
    storage: AsyncStorage,
}

export default combineReducers({
    themeReducer: persistReducer(themePersistConfig, themereducer),
});