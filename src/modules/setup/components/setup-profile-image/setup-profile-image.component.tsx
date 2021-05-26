import React from 'react';
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./setup-profile-image.styles";
import GlobalConfig from "../../../../global.config";

const SetupProfileImage: React.FC = () => {

    const classes = useStyles();

    const [profile, setProfile] = React.useState<any>(undefined);

    React.useEffect(() => {
        fetchProfile();
    }, [])

    const fetchProfile = (): void => {
        fetch(`${GlobalConfig.Apis.ProfileService}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
            },
        }).then(data => data.json()).then(response => {
            setProfile(response);
        })
    }

    const uploadFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const reader = new FileReader();
        reader.readAsDataURL((event.target.files as FileList)[0]);
        reader.onload = () => {
            fetch('https://europe-west1-kwetter-308618.cloudfunctions.net/imagekit-upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                },
                body: new URLSearchParams({
                    'base64image': reader.result as string
                }),
            }).then(res => res.json()).then(response => updateProfileImage(response.url))
        }
    }

    const updateProfileImage = (imageUrl): void => {
        fetch(`${GlobalConfig.Apis.ProfileService}/me`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imageUrl: imageUrl
            })
        }).then(data => {
            if (data.ok) {
                fetchProfile();
            }
        })
    }

    return (
        <Paper elevation={0}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Typography>Please upload a profile image</Typography>

                {
                    profile !== undefined ?
                        <img src={profile.imageUrl} width={200} height={200} alt={'profile image is here'} /> :
                        <div style={{ width: '200px', height: '200px', border: '1px solid grey' }} />
                }

                <Button component='label' variant='contained'>
                    Upload
                    <input
                        accept='.gif,.jpg,.jpeg,.jfif,.pjpeg,.pjp,.png'
                        type='file'
                        onChange={uploadFile}
                        hidden
                        title='Upload'
                    />
                </Button>
            </Grid>
        </Paper>
    )
};

export default SetupProfileImage;
