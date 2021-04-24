import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./profile-not-found.styles";

const ProfileNotFound: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Grid className={classes.profileHeaderContainer} container direction='row' alignItems='center'>
                <Typography className={classes.profileHeaderText}>Profile</Typography>
            </Grid>

            <Grid className={classes.profileContainer} container direction='column'>
                <div className={classes.profileImage} />
            </Grid>
            <Grid className={classes.profileDescriptionContainer} container direction='column'>
                <Typography className={classes.profileHeaderText}>@dirkheijnen</Typography>
            </Grid>

            <Grid container direction='column'>
                <Typography className={classes.profileNotExistText}>This profile does not exist</Typography>
            </Grid>
        </>
    )
}

export default ProfileNotFound;
