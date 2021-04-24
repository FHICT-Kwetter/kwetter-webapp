import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Grid, Typography } from "@material-ui/core";
import { StartTemplate } from "modules/shared/templates";
import useStyles from "./start-page.styles";
import LoginModal from "../../components/login-modal/login-modal.component";
import RegisterModal from "../../components/register-modal/register-modal.component";

interface StartPageProps extends RouteComponentProps { }

const StartPage: React.FC<StartPageProps> = (props: StartPageProps) => {
    const classes = useStyles();

    const [loginModalOpen, setLoginModalOpen] = React.useState<boolean>(false);
    const [registerModalOpen, setRegisterModalOpen] = React.useState<boolean>(false);

    const toRegister = () => {
        setRegisterModalOpen(true);
    }

    const toLogin = () => {
        setLoginModalOpen(true);
    }

    return (
        <StartTemplate>

            <Grid className={classes.contentContainer} container direction='column' justify='center' alignContent='center' alignItems='center'>
                <Typography className={classes.title}>What's happening</Typography>
                <Typography className={classes.subtitle}>Sign up for Kwetter today!</Typography>

                <Button className={classes.registerButton} variant='contained' color='primary' onClick={toRegister}>
                    Register
                </Button>

                <Button className={classes.loginButton} variant='contained' color='primary' onClick={toLogin}>
                    Login
                </Button>
            </Grid>


            { registerModalOpen && <RegisterModal open={registerModalOpen} handleClose={() => setRegisterModalOpen(false)} /> }
            { loginModalOpen && <LoginModal open={loginModalOpen} handleClose={() => setLoginModalOpen(false)} /> }
        </StartTemplate>
    )
};

export default withRouter(StartPage);
