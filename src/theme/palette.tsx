import { ThemeBackground, ThemeColor } from "modules/settings/store/types";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        custom: {
            inactiveIcon: string;
            inactiveIconBackground: string;
            borderColor: string;
            backgroundHover: string;
        }
    }
    interface PaletteOptions {
        custom: {
            inactiveIcon: string;
            inactiveIconBackground: string;
            borderColor: string;
            backgroundHover: string;
        }
    }
}

const createBackgroundColor = (background: ThemeBackground) => {
    switch (background)
    {
        case "light" : return 'rgb(247, 249, 250)';
        case "dark"  : return 'rgb(21, 24, 28)';
        case "dim"   : return 'rgb(25, 39, 52)';
    }
}

const createBackgroundHoverColor = (background: ThemeBackground) => {
    switch (background)
    {
        case "light" : return 'rgba(247, 249, 250, 0.9)';
        case "dark"  : return 'rgba(21, 24, 28, 0.9)';
        case "dim"   : return 'rgba(25, 39, 52, 0.9)';
    }
}

const createPaperColor = (background: ThemeBackground) => {
    switch (background)
    {
        case "light" : return 'rgb(255, 255, 255)';
        case "dark"  : return 'rgb(0, 0, 0)';
        case "dim"   : return 'rgb(21, 32, 43)';
    }
}

const createPrimaryColor = (color: ThemeColor) => {
    switch (color)
    {
        case "blue"   : return 'rgb(29, 161, 242)';
        case "yellow" : return 'rgb(255, 173, 32)';
        case "green"  : return 'rgb(23, 191, 99)';
        case "orange" : return 'rgb(244, 93, 34)';
        case "pink"   : return 'rgb(224, 36, 94)';
        case "purple" : return 'rgb(121, 75, 196)';
    }
}

const createTextPrimaryColor = (background: ThemeBackground) => {
    switch (background)
    {
        case "light" : return 'rgb(15, 20, 25)';
        case "dark"  : return 'rgb(217, 217, 217)';
        case "dim"   : return 'rgb(255, 255, 255)';
    }
}

const createTextSecondaryColor = (background: ThemeBackground) => {
    switch (background) {
        case "light" : return 'rgb(56,63,71)';
        case "dark"  : return 'rgb(171,170,170)';
        case "dim"   : return 'rgb(169,169,169)';
    }
}

const createInactiveIconColor = (background: ThemeBackground) => {
    switch (background)
    {
        case "light" : return 'rgb(15, 20, 25)';
        case "dark"  : return 'rgb(217, 217, 217)';
        case "dim"   : return 'rgb(255, 255, 255)';
    }
}

const createInactiveIconBackgroundColor = (color: ThemeColor) => {
    switch (color) {
        case "blue"   : return 'rgba(29, 161, 242, 0.85)';
        case "yellow" : return 'rgba(255, 173, 32, 0.85)';
        case "green"  : return 'rgba(23, 191, 99, 0.85)';
        case "orange" : return 'rgba(244, 93, 34, 0.85)';
        case "pink"   : return 'rgba(224, 36, 94, 0.85)';
        case "purple" : return 'rgba(121, 75, 196, 0.85)';
    }
}

const createBorderColor = (background: ThemeBackground): string => {
    switch (background)
    {
        case "light" : return 'rgb(235, 238, 240)';
        case "dark"  : return 'rgb(47, 51, 54)';
        case "dim"   : return 'rgb(56, 68, 77)';
    }
}

export const createPalette = (background: ThemeBackground, color: ThemeColor): PaletteOptions => {

    const backgroundColor = createBackgroundColor(background);
    const backgroundHoverColor = createBackgroundHoverColor(background);
    const paperColor = createPaperColor(background);
    const primaryColor = createPrimaryColor(color);
    const primaryTextColor = createTextPrimaryColor(background);
    const secondaryTextColor = createTextSecondaryColor(background);
    const inactiveIconColor = createInactiveIconColor(background);
    const inactiveIconBackgroundColor = createInactiveIconBackgroundColor(color);
    const borderColor = createBorderColor(background);

    return {
        background: {
            default: backgroundColor,
            paper: paperColor
        },
        primary: {
            main: primaryColor,
        },
        text: {
            primary: primaryTextColor,
            secondary: secondaryTextColor
        },
        custom: {
            inactiveIcon: inactiveIconColor,
            inactiveIconBackground: inactiveIconBackgroundColor,
            borderColor: borderColor,
            backgroundHover: backgroundHoverColor
        }
    }
}
