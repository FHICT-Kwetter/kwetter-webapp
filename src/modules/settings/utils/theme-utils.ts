import { ThemeBackground, ThemeColor } from "modules/settings/store/types";

const LOCAL_STORAGE_BACKGROUND_KEY = 'kwetter-theme-background';
const LOCAL_STORAGE_COLOR_KEY = 'kwetter-theme-color';

export const getBackgroundColor = (): ThemeBackground => {
    const localStorageBackground = localStorage.getItem(LOCAL_STORAGE_BACKGROUND_KEY);

    if (localStorageBackground == null)
    {
        localStorage.setItem(LOCAL_STORAGE_BACKGROUND_KEY, 'light');
        return 'light';
    }

    if (localStorageBackground as string === 'light' ||
        localStorageBackground as string === 'dim'   ||
        localStorageBackground as string === 'dark')
    {
        return (
            localStorageBackground as string === 'light' ? 'light' :
                localStorageBackground as string === 'dim'   ? 'dim'   :
                    localStorageBackground as string === 'dark'  ? 'dark'  : 'light');
    }

    localStorage.setItem(LOCAL_STORAGE_BACKGROUND_KEY, 'light');
    return 'light';
}

export const setBackgroundColor = (backgroundColor: ThemeBackground): void => {
    localStorage.setItem(LOCAL_STORAGE_BACKGROUND_KEY, backgroundColor);
}

export const getColor = (): ThemeColor => {
    const localStorageColor = localStorage.getItem(LOCAL_STORAGE_COLOR_KEY);

    if (localStorageColor == null)
    {
        localStorage.setItem(LOCAL_STORAGE_COLOR_KEY, 'blue');
        return 'blue';
    }

    if (localStorageColor as string === 'blue'   ||
        localStorageColor as string === 'yellow' ||
        localStorageColor as string === 'pink'   ||
        localStorageColor as string === 'purple' ||
        localStorageColor as string === 'orange' ||
        localStorageColor as string === 'green')
    {
        return (
            localStorageColor as string === 'blue'   ? 'blue'   :
                localStorageColor as string === 'yellow' ? 'yellow' :
                    localStorageColor as string === 'pink'   ? 'pink'   :
                        localStorageColor as string === 'purple' ? 'purple' :
                            localStorageColor as string === 'orange' ? 'orange' :
                                localStorageColor as string === 'green'  ? 'green'  : 'blue');
    }

    localStorage.setItem(LOCAL_STORAGE_BACKGROUND_KEY, 'blue');
    return 'blue';
}

export const setColor = (color: ThemeColor): void => {
    localStorage.setItem(LOCAL_STORAGE_COLOR_KEY, color);
}
