import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./profile-not-found.styles";
import { RouteComponentProps } from "react-router-dom";

interface ProfileNotFoundProps extends RouteComponentProps { }

const ProfileNotFound: React.FC<ProfileNotFoundProps> = (props: ProfileNotFoundProps) => {

    const classes = useStyles();
    const username = (props.match.params as any).username;

    return (
        <>
            <Grid className={classes.profileContainer} container direction='column'>
                <div className={classes.profileImage} />
            </Grid>
            <Grid className={classes.profileDescriptionContainer} container direction='column'>
                <Typography className={classes.profileHeaderText}>@{username}</Typography>
            </Grid>

            <Grid container direction='column'>
                <Typography className={classes.profileNotExistText}>This profile does not exist</Typography>
            </Grid>
        </>
    )
}

export default withRouter(ProfileNotFound);
