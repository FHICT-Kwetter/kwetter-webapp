import React from 'react';
import { Button, Grid, Typography } from "@material-ui/core";
import DeleteAccountDialog from "modules/settings/components/dialogs/delete-account-dialog.component";
import useStyles from "modules/settings/components/sections/delete-account-section/delete-account-section.styles";

const DeleteAccountSection: React.FC = () => {
    const classes = useStyles();

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const openDialog = () => { setDialogOpen(true); }

    const closeDialog = () => { setDialogOpen(false); }

    return (
        <Grid container direction='column'>
            <Grid className={classes.title} item xs={12}>
                <Typography>Delete account</Typography>
            </Grid>
            <Grid className={classes.descriptionContainer} item xs={12}>
                <Typography className={classes.descriptionText}>Clicking the button below will permanently remove your account from Kwetter.</Typography>
            </Grid>
            <Grid className={classes.buttonContainer} item xs={12}>
                <Button className={classes.button} variant='contained' onClick={openDialog}>Delete</Button>
                <DeleteAccountDialog open={dialogOpen} close={closeDialog} />
            </Grid>
        </Grid>
    )
}

export default DeleteAccountSection;
