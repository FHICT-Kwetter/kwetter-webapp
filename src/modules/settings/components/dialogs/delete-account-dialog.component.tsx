import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import GlobalConfig from "global.config";
import { ErrorSnackbar } from "modules/shared/components";
import useStyles from "./delete-account-dialog.styles";

interface DeleteAccountDialogProps extends RouteComponentProps {
    open: boolean;
    close: () => void;
}

const DeleteAccountDialog: React.FC<DeleteAccountDialogProps> = (props: DeleteAccountDialogProps) => {
    const classes = useStyles();

    const [error, setError] = React.useState<string>("");

    const deleteAccount = (): void => {
        fetch(`${GlobalConfig.Apis.IdentityServer}/users`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
            }
        }).then(result => {
            if (result.ok) {
                localStorage.removeItem(GlobalConfig.LocalStorage.AccessTokenKey);
                localStorage.removeItem(GlobalConfig.LocalStorage.RefreshTokenKey);
                localStorage.removeItem(GlobalConfig.LocalStorage.ThemeBackgroundKey);
                localStorage.removeItem(GlobalConfig.LocalStorage.ThemeColorKey);
                props.history.push('/auth');
            } else {
                setError('Something went wrong trying to delete this account.');
            }
        }).catch(err => { setError('A network error has occurred while sending the request.') });
    }

    return (
        <Dialog open={props.open} onClose={props.close}>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogContent>
                <DialogContentText className={classes.dialogContentText}>
                    We are making sure you want to delete your account. If you wish to delete your account click
                    on the delete account button, otherwise click on go back.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className={classes.goBackButton} onClick={props.close}>Go back</Button>
                <Button className={classes.deleteButton} onClick={deleteAccount}>Delete account</Button>
            </DialogActions>

            { error !== '' && <ErrorSnackbar open={true} duration={5000} onClose={() => setError('')} text={error} /> }
        </Dialog>
    );
}

export default withRouter(DeleteAccountDialog);
