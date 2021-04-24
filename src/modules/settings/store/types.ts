export type ThemeBackground = 'light' | 'dim' | 'dark';
export type ThemeColor = 'blue' | 'yellow' | 'pink' | 'purple' | 'orange' | 'green';

export const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
export const CHANGE_COLOR = "CHANGE_COLOR";

export interface ChangeThemeBackgroundAction {
    type: typeof CHANGE_BACKGROUND
    payload: {
        background: ThemeBackground
    }
}

export interface ChangeThemeColorAction {
    type: typeof CHANGE_COLOR,
    payload: {
        color: ThemeColor
    }
}

export interface ThemeState {
    background: ThemeBackground;
    color: ThemeColor;
}

export type ThemeActionTypes = ChangeThemeBackgroundAction | ChangeThemeColorAction;
