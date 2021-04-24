import { CHANGE_BACKGROUND, CHANGE_COLOR, ThemeActionTypes, ThemeState } from "modules/settings/store/types";
import { getBackgroundColor, setBackgroundColor, getColor, setColor } from "modules/settings/utils";

const initialState: ThemeState = {
    background: getBackgroundColor(),
    color: getColor(),
};

export const themeReducer = (state: ThemeState = initialState, action: ThemeActionTypes): ThemeState => {
    switch (action.type) {

        case CHANGE_BACKGROUND:
            setBackgroundColor(action.payload.background);
            return {
                ...state,
                background: action.payload.background
            };

        case CHANGE_COLOR:
            setColor(action.payload.color);
            return {
                ...state,
                color: action.payload.color
            }

        default:
            return state;
    }
};
