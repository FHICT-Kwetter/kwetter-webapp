import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import GlobalConfig from "../../../../global.config";

const SetupDisplayName: React.FC = () => {
    const [displayName, setDisplayName] = React.useState<string>('');

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
            setDisplayName(response.displayName)
        })
    }

    const updateDisplayName = (): void => {
        fetch(`${GlobalConfig.Apis.ProfileService}/me`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                displayName: displayName
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
                <Typography>Fill out display name</Typography>
                <TextField onChange={(event) => setDisplayName(event.target.value)} value={displayName} />
                <Button variant='contained' onClick={updateDisplayName}>Update</Button>
            </Grid>
        </Paper>
    )
};

export default SetupDisplayName;
