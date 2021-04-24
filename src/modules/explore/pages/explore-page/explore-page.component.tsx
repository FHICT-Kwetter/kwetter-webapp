import React from 'react';
import MainTemplate from "../../../shared/templates/main-template/main-template.component";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./explore-page.styles";

const ExplorePage: React.FC = () => {

    const classes = useStyles();
    return (
        <MainTemplate activeMenuOption='explore'>
            <Grid container direction='column'>
                <Grid className={classes.headerContainer} container direction='row' alignItems='center' alignContent='flex-start'>
                    <Grid container direction='column'>
                        <Typography className={classes.headerText}>Explore</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </MainTemplate>
    )
}

export default ExplorePage;
