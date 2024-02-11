import { combineReducers } from "redux";
import Themereducer from './themereducer';
import DrawerReducer from "./drawerReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";



const themePersistConfig = {
    key: 'theme',
    storage: AsyncStorage,
}

export default combineReducers({
    ThemeReducer: persistReducer(themePersistConfig, Themereducer),
    DrawerReducer,

});