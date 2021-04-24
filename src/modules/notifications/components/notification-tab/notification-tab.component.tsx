import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import NotificationItem from "../notification-item/notification-item.component";
import useStyles from "./notification-tab.styles";

const EmptyNotificationTab: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.tabPanelContainer} container direction='column'>
            <Typography className={classes.emptyTitle} variant='h4'>Nothing to see here — yet</Typography>
            <Typography className={classes.emptyDescription} variant='body2'>From likes to Retweets and a whole lot more, this is where all the action happens.</Typography>
        </Grid>
    )
}

const FilledNotificationTab: React.FC = () => {

    const fakeNotifications = [];

    return (
        <Grid container direction='column'>
            {
                fakeNotifications.map(notification => <NotificationItem notification={notification} />)
            }
        </Grid>
    )
}

const NotificationTab: React.FC = () => {

    const fakeNotifications = [];

    return (
        <>
            { fakeNotifications.length === 0 ? <EmptyNotificationTab /> : <FilledNotificationTab /> }
        </>
    )
}

export default NotificationTab;
