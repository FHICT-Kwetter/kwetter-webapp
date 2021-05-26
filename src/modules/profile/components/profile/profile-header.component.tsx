import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

import ProfileFeed from 'modules/shared/components/profile-feed/profile-feed.component';
import GlobalConfig from 'global.config'
import useStyles from './profile-header.styles';
import { ProfileModel } from "../../models/profile";
import ProfileNotFound from "../profile-not-found/profile-not-found.component";
import SetupModal from "../../../setup/components/setup-modal/setup-modal.component";

interface ProfileProps extends RouteComponentProps { }

const ProfileHeader: React.FC<ProfileProps> = (props: ProfileProps) => {
    const classes = useStyles();

    const [profile, setProfile] = React.useState<ProfileModel | undefined>(undefined);
    const [editMode, setEditMode] = React.useState<boolean>(false);

    React.useEffect(() => {
        fetchProfile((props.match.params as any)?.username);
    }, [])

    const fetchProfile = (username) => {
        if (username !== undefined) {
            fetch(`${GlobalConfig.Apis.ProfileService}/${username}`, {
                method: 'GET'
            }).then(res => res.json()).then((profile: ProfileModel) => {
                setProfile(profile);
            })
        } else {
            fetch(`${GlobalConfig.Apis.ProfileService}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
                }
            }).then(res => res.json()).then((profile: ProfileModel) => {
                setProfile(profile);
            })
        }
    }

    const openEditModal = () => {
        setEditMode(true);
    }

    const closeEditModal = () => {
        fetchProfile((props.match.params as any)?.username);
        setEditMode(false);
    }

    const username = (props.match.params as any)?.username;
    console.log(props.match);

    return (
        <>
            {
                editMode ? <SetupModal open={editMode} handleClose={closeEditModal} /> : null
            }
            {
                profile === undefined ?
                    <ProfileNotFound /> :
                    (
                        <>
                            <Grid container className={classes.profileImageContainer} >
                                <img className={classes.profileImage} src={profile.imageUrl} alt='profile picture'/>
                            </Grid>

                            {
                                username === undefined ? (
                                    <Grid container direction='row' justify='flex-end' style={{ padding: 0, margin: 0}}>
                                        <Grid item xs={2} style={{ padding: 0, margin: 0}}>
                                            <Button onClick={openEditModal}>Edit</Button>
                                        </Grid>
                                    </Grid>
                                ) : null
                            }

                            <Grid container direction='column' className={username ? classes.profileContentContainer : classes.ownProfileContentContainer}>
                                <Typography className={classes.profileNameText}>{profile.displayName}</Typography>
                                <Typography className={classes.profileTwitterHandleText}>@{profile.username}</Typography>
                                <Typography className={classes.profileDescriptionText}>{profile.bio}</Typography>

                                <Grid container direction='row' className={classes.profileStatsContainer}>
                                    <span><b>98</b> Following </span>
                                    <span className={classes.profileStatsSeparator}> <b>322</b> Followers </span>
                                </Grid>
                            </Grid>

                            <ProfileFeed />
                        </>
                    )
            }
        </>
    )
}

export default withRouter(ProfileHeader);
