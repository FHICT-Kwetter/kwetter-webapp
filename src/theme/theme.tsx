import { createMuiTheme } from "@material-ui/core";
import { ThemeBackground, ThemeColor } from "modules/settings/store";
import { createPalette } from "theme/palette";

const createTheme = (background: ThemeBackground, color: ThemeColor) => {

    return createMuiTheme({
        palette: createPalette(background, color)
    })
}

export default createTheme;
