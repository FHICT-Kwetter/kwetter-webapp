import { ThemeBackground, ThemeActionTypes, ThemeColor, CHANGE_COLOR, CHANGE_BACKGROUND } from "modules/settings/store/types";

export const changeThemeBackground = (background: ThemeBackground): ThemeActionTypes => ({
    type: CHANGE_BACKGROUND,
    payload: {
        background: background,
    }
});

export const changeThemeColor = (color: ThemeColor): ThemeActionTypes => ({
    type: CHANGE_COLOR,
    payload: {
        color: color,
    }
});
