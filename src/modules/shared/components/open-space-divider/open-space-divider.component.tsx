import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './open-space-divider.styles';

export const OpenSpaceDivider: React.FC = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.openSpaceDivider} container direction='column' xs={12}/>
    )
};
