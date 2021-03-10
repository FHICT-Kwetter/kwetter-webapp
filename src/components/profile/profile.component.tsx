import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CakeOutlinedIcon from "@material-ui/icons/CakeOutlined";

import useStyles from "./profile.styles";
import ProfileFeed from "../profile-feed/profile-feed.component";

const Profile: React.FC = () => {

    const classes = useStyles();

    const user = {
        name: "Dirk Heijnen",
        username: "dirkheijnen",
        description: "Developer at @Kwetter",
        kweetCount: 432,
    }

    return (
        <>
            <Grid className={classes.profileHeaderContainer} container direction='row' alignItems='center'>
                <Grid container direction='column'>
                    <Typography className={classes.profileNameText}>{user.name}</Typography>
                    <Typography className={classes.profileTweetsText}>{user.kweetCount} Kweets</Typography>
                </Grid>
            </Grid>

            <Grid container style={{ padding: 'min(calc(10vw + 7px),67px) 16px 0', position: 'relative', width: '100%', height: 'min(33vw, 199px)', backgroundImage: "url('https://1.bp.blogspot.com/-lg73Nw76yCc/V9_EnSSngLI/AAAAAAAAWxY/bQtB8s4wWPsvzsac3xZYbP--23d-KugzwCLcB/s1600/StarCIO%2BLess%2BCode.jpg')" }}>
                <img
                    className={classes.profileImage}
                    src='https://cdn5.vectorstock.com/i/thumb-large/17/59/default-placeholder-businessman-half-length-portr-vector-21181759.jpg'
                    alt='profile picture'
                />
            </Grid>
            <Grid container direction='column' style={{ marginTop: '80px', padding: '5px 10px'}}>
                <Typography className={classes.profileNameText}>{user.name}</Typography>
                <Typography className={classes.profileTwitterHandleText}>@{user.username}</Typography>
                <Typography className={classes.profileDescriptionText}>{user.description}</Typography>

                <ul style={{ listStyleType: 'none', margin: '20px 0px', padding: '0px'}}>
                    <li className={classes.text}><LocationOnOutlinedIcon fontSize='small'/> Eindhoven, The Netherlands</li>
                    <li className={classes.text}><CakeOutlinedIcon fontSize='small' /> Born on January 21, 1995</li>
                </ul>

                <Grid container direction='row'>
                    <span className={classes.text}><b>98</b> Following </span>
                    <span className={classes.text} style={{marginLeft: '20px'}}> <b>322</b> Followers </span>
                </Grid>
            </Grid>

            <ProfileFeed />
        </>
    )
}

export default Profile;
