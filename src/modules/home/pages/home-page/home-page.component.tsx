import React from 'react';
import MainTemplate from "../../../shared/templates/main-template/main-template.component";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./home-page.styles";
import FakeKweets from "../../../../store/kweets";
import Kweet from "../../../shared/components/kweet/kweet.component";
import CreateKweet from "../../../shared/components/create-kweet/create-kweet.component";


import SetupModal from "../../../setup/components/setup-modal/setup-modal.component";

const HomePage: React.FC = () => {

    const classes = useStyles();

    const isNew = false;

    return (
        <MainTemplate activeMenuOption='home'>
            <CreateKweet />

            {
                isNew ?
                    <Grid className={classes.tabPanelContainerNewUser} container direction='column'>
                        <Typography className={classes.emptyTitle} variant='h4'>Welcome to Kwetter!</Typography>
                        <Typography className={classes.emptyDescription} variant='body2'>This is the best place to see what’s happening in your world. Find some people and topics to follow now.</Typography>
                        <Button className={classes.startButton} variant='contained' color="primary" >Let's go!</Button>
                    </Grid> :
                    <>
                        {
                            FakeKweets.map(kweet => <Kweet kweet={kweet} />)
                        }
                    </>
            }


            {/*<SetupModal open={true} handleClose={() => console.log("test")} />*/}
        </MainTemplate>
    )
}

export default HomePage;
