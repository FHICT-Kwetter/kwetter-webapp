import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";

import SearchBar from "../../components/search-bar/search-bar.component";
import useStyles from "./main-template.styles";
import { useWindowSize } from "../../utils/use-window-size";
import Menu from "../../components/menu/menu.component";

interface MainTemplateProps {
    activeMenuOption: 'home' | 'explore' | 'notifications' | 'messages' | 'profile' | 'settings';
}

const MainTemplate: React.FC<MainTemplateProps> = ({ activeMenuOption, children }) => {

    const classes = useStyles();
    const width = useWindowSize().width;

    const title = activeMenuOption.charAt(0).toUpperCase() + activeMenuOption.slice(1);

    return (
        <Paper style={{ height: '100vh', width: '100vw', borderRadius: '0px' }}>
            <Paper className={classes.mainContainer}>
                { width && width > 450 && (<Menu activeItem={activeMenuOption} />) }

                <Grid className={classes.container} container direction='column'>
                    <Grid container direction='column'>
                        <Grid className={classes.headerContainer} container direction='row' alignItems='center' alignContent='flex-start'>
                            <Grid container direction='column'>
                                <Typography className={classes.headerText}>{ title }</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    { children }
                </Grid>

                { width && width > 450 && ( <SearchBar /> ) }

                {/* If the device width is less than 450, put the menu on the bottom  */}
                { width && width < 450 && ( <Menu activeItem={activeMenuOption} /> ) }

            </Paper>
        </Paper>
    )
}

export default MainTemplate;
