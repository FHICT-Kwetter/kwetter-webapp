import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { ErrorSnackbar } from "modules/shared/components";
import ModalSpinner from "../modal-spinner/modal-spinner.component";
import GlobalConfig from "global.config";
import useStyles from "./modal-form.styles";

interface ModalFormProps extends RouteComponentProps { }

const ModalForm: React.FC<ModalFormProps> = (props: ModalFormProps) => {

    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>('');

    const submitLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        fetch(`${GlobalConfig.OAuthClient.tokenUri}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', },
            body: new URLSearchParams({
                'client_id': GlobalConfig.OAuthClient.clientId,
                'client_secret': GlobalConfig.OAuthClient.clientSecret,
                'grant_type': GlobalConfig.OAuthClient.grantType,
                'scope': GlobalConfig.OAuthClient.scope,
                'username': username,
                'password': password,
            })
        }).then(data => {
            data.json().then(responseBody => {
                if (data.ok) {
                    localStorage.setItem(GlobalConfig.LocalStorage.AccessTokenKey, responseBody.access_token);
                    localStorage.setItem(GlobalConfig.LocalStorage.RefreshTokenKey, responseBody.refresh_token);
                    props.history.push('/home');
                } else {
                    setError('Invalid credentials entered');
                    setLoading(false);
                }
            });
        }).catch(error => {
            setError('Unfortunately a network error occurred.');
            setLoading(false);
        });
    }

    const classes = useStyles();

    return(
        <Paper elevation={0}>
            <Grid className={classes.container} container direction='column' justify='center' alignContent='center' alignItems='center'>
                {
                    isLoading ? <ModalSpinner /> : (
                        <>
                            <Typography className={classes.loginFormTitle}>Login to Kwetter</Typography>

                            <form className={classes.loginForm} autoComplete='off' onSubmit={submitLoginForm}>
                                <TextField className={classes.textField} onChange={e => setUsername(e.target.value)} value={username} label='Username or Email' type='text' variant='outlined' />
                                <TextField className={classes.textField} onChange={e => setPassword(e.target.value)} value={password} label='Password' type='password' variant='outlined' />
                                <Button className={classes.submitButton} variant='contained' type='submit' color='primary'>Login</Button>
                            </form>
                        </>
                    )
                }
            </Grid>

            { error !== '' && <ErrorSnackbar open={true} duration={5000} onClose={() => setError('')} text={error} /> }
        </Paper>

    )
}

export default withRouter(ModalForm);
