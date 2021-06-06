import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import NotificationItem from "../notification-item/notification-item.component";
import useStyles from './mentions-tab.styles';

const EmptyMentionsTab: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.tabPanelContainer} container direction='column'>
            <Typography className={classes.emptyTitle} variant='h4'>Nothing to see here — yet</Typography>
            <Typography className={classes.emptyDescription} variant='body2'>When someone mentions you, you’ll find it here.</Typography>
        </Grid>
    )
}

const FilledMentionsTab: React.FC = () => {

    const mentions = [];

    return (
        <Grid container direction='column'>
            {/*{*/}
            {/*    mentions.map(notification => <NotificationItem notification={notification} />)*/}
            {/*}*/}
        </Grid>
    )
}

const MentionsTab: React.FC = () => {

    const mentions = []

    return (
        <>
            { mentions.length === 0 ? <EmptyMentionsTab /> : <FilledMentionsTab /> }
        </>
    )
}

export default MentionsTab;
