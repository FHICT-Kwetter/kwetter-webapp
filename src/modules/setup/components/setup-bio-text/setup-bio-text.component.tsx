import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import GlobalConfig from "../../../../global.config";

const SetupBioText: React.FC = () => {
    const [bioText, setBioText] = React.useState<string>('');

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
            setBioText(response.bio)
        })
    }

    const updateBioText = (): void => {
        fetch(`${GlobalConfig.Apis.ProfileService}/me`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bio: bioText
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
                <Typography>Fill out new bio</Typography>
                <TextField onChange={(event) => setBioText(event.target.value)} value={bioText} />
                <Button variant='contained' onClick={updateBioText}>Update</Button>
            </Grid>
        </Paper>
    )
};

export default SetupBioText;
