import { createStore, combineReducers } from "redux";
import { themeReducer } from "modules/settings/store/reducer";

export const store = createStore(combineReducers({
    theme: themeReducer
}));
