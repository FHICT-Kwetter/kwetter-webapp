import React from 'react';
import { Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./user-entry.styles";

interface UserEntryProps {
    user: {
        imageUrl: string;
        username: string;
        handle: string;
    }
}

const UserEntry: React.FC<UserEntryProps> = (props: UserEntryProps) => {
    const classes = useStyles();

    const { user } = props;

    return (
        <>
            <Grid className={classes.userRowContainer} container direction='row'>
                <Grid item xs={1}>
                    <img className={classes.userImage} src={user.imageUrl} alt='profile-image' />
                </Grid>
                <Grid item xs={11}>
                    <Typography className={classes.usernameText}>{user.username}</Typography>
                    <Typography className={classes.handleText}>@{user.handle}</Typography>
                </Grid>
            </Grid>

            <Divider />
        </>
    )
}

export default UserEntry;
