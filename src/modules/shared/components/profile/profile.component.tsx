import React from 'react';
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./profile.styles";
import ProfileFeed from "../profile-feed/profile-feed.component";
import GlobalConfig from "../../../../global.config";
import { ProfileModel } from "../../../profile/models/profile";

const Profile: React.FC = () => {

    const classes = useStyles();

    const [profile, setProfile] = React.useState<ProfileModel | undefined>(undefined);

    React.useEffect(() => {
        fetch(`${GlobalConfig.Apis.ProfileService}/api/v1/profiles/dirkheijnen`, {
            method: 'GET'
        }).then(res => res.json()).then((profile: ProfileModel) => {
            console.log('profile', profile)
            setProfile(profile);
        })
    }, [])

    return (
        <>
            <Grid container style={{ padding: 'min(calc(10vw + 7px),67px) 16px 0', position: 'relative', width: '100%', height: 'min(33vw, 199px)', backgroundImage: "url('https://1.bp.blogspot.com/-lg73Nw76yCc/V9_EnSSngLI/AAAAAAAAWxY/bQtB8s4wWPsvzsac3xZYbP--23d-KugzwCLcB/s1600/StarCIO%2BLess%2BCode.jpg')" }}>
                <img
                    className={classes.profileImage}
                    src={profile?.imageLink}
                    alt='profile picture'
                />
            </Grid>
            <Grid container direction='column' style={{ marginTop: '80px', padding: '5px 10px'}}>
                <Typography className={classes.profileNameText}>{profile?.displayName}</Typography>
                <Typography className={classes.profileTwitterHandleText}>@{profile?.username}</Typography>
                <Typography className={classes.profileDescriptionText}>{profile?.bio}</Typography>

                <Grid container direction='row' style={{ marginTop: '20px'}}>
                    <span><b>98</b> Following </span>
                    <span style={{marginLeft: '20px'}}> <b>322</b> Followers </span>
                </Grid>
            </Grid>

            <ProfileFeed />
        </>
    )
}

export default Profile;
