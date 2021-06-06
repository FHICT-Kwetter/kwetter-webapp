import React from 'react';
import MainTemplate from "../../../shared/templates/main-template/main-template.component";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./home-page.styles";
import Kweet from "../../../shared/components/kweet/kweet.component";
import CreateKweet from "../../../shared/components/create-kweet/create-kweet.component";
import { KweetModel } from "../../../../store/models";
import globalConfig from 'global.config';
import GlobalConfig from "global.config";

const HomePage: React.FC = () => {

    const [kweets, setKweets] = React.useState<KweetModel[]>([]);

    React.useEffect(() => {
        fetch(`${globalConfig.Apis.KweetService}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
            },
        }).then(data => data.json()).then(res => setKweets(res))
    }, [])

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
                            kweets.sort((a, b) => { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() })
                                .map(kweet => <Kweet kweet={kweet} />)
                        }
                    </>
            }

        </MainTemplate>
    )
}

export default HomePage;
