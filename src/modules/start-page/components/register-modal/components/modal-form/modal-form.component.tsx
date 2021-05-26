import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from "./modal-form.styles";
import GlobalConfig from "../../../../../../global.config";
import ErrorSnackbar, { SuccessSnackbar } from "modules/shared/components/error-snackbar/error-snackbar.component";

const ModalForm: React.FC = () => {
    const classes = useStyles();

    const [email, setEmail] = React.useState<string>('');
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = React.useState<string>('');
    const [errorMessage, setErrorMessage] = React.useState<string>('');
    const [networkError, setNetworkError] = React.useState<string>('');
    const [successMessage, setSuccessMessage] = React.useState<string>('');

    const submitRegisterForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== repeatedPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        fetch(`${GlobalConfig.Apis.IdentityServer}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password })
        }).then(data => {
            const response = data.json();

            response.then(responseBody => {
                if (data.ok) {
                    setSuccessMessage('Account created successfully');
                } else {
                    if (responseBody.message){
                        setErrorMessage(responseBody.message);
                    } else {
                        setErrorMessage(responseBody.errors[Object.keys(responseBody.errors)[0]][0]);
                    }
                }
            })
        }).catch(err => setNetworkError('Unfortunately a network error occurred.'));
    }

    return(
        <Paper elevation={0}>
            <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>

                <Typography className={classes.registerFormTitle}>Create a Kwetter account</Typography>

                <form className={classes.registerForm} autoComplete='off' onSubmit={submitRegisterForm}>
                    <TextField className={classes.textField} onChange={e => setEmail(e.target.value)} label='Email' type='email' variant='outlined' autoComplete='off' />
                    <TextField className={classes.textField} onChange={e => setUsername(e.target.value)} label='Username' type='username' variant='outlined' />
                    <TextField className={classes.textField} onChange={e => setPassword(e.target.value)} label='Password' type='password' variant='outlined' />
                    <TextField className={classes.textField} onChange={e => setRepeatedPassword(e.target.value)} label='Repeat Password' type='password' variant='outlined' />

                    { errorMessage !== '' && <Typography color='error'>{errorMessage}</Typography> }

                    <Button className={classes.submitButton} variant='contained' type='submit' color='primary'>Register</Button>
                </form>
            </Grid>

            { successMessage !== '' && <SuccessSnackbar open={true} duration={5000} onClose={() => setSuccessMessage('')} text={successMessage} /> }
            { networkError !== '' && <ErrorSnackbar open={true} duration={5000} onClose={() => setNetworkError('')} text={networkError} /> }
        </Paper>

    )
}

export default ModalForm;
