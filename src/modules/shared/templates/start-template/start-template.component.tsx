import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import useStyles from "./start-template.styles";

const StartTemplate: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid className={classes.pageContainer} container direction='row'>
                <Grid className={classes.imageContainer} item xs={6} />
                <Grid item xs={6}>
                    { children }
                </Grid>

            </Grid>
        </Paper>
    )
}

export default StartTemplate;
