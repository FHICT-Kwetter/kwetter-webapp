import React from 'react';
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./setup-profile-image.styles";
import GlobalConfig from "../../../../global.config";

const SetupProfileImage: React.FC = () => {

    const classes = useStyles();

    const [image, setImage] = React.useState<File | undefined>(undefined);


    const uploadFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const reader = new FileReader();
        reader.readAsDataURL((event.target.files as FileList)[0]);
        reader.onload = () => {
            fetch('https://kwetter-gcloud-gateway-df0jynj1.ew.gateway.dev/media/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                },
                body: new URLSearchParams({
                    'base64image': reader.result as string
                }),
            })
        }

    }

    return (
        <Paper elevation={0}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Typography>Please upload a profile image</Typography>

                {
                    image !== undefined ?
                        <img src={URL.createObjectURL(image)} width={200} height={200} /> :
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
