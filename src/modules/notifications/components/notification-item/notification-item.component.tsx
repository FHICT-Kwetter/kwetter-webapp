import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import useStyles from 'modules/notifications/components/notification-item/notification-item.styles'
import { NotificationModel } from 'store/models'

interface NotificationItemProps {
    notification: NotificationModel;
}

const NotificationItem: React.FC<NotificationItemProps> = (props: NotificationItemProps) => {

    const { notification } = props;
    const classes = useStyles();

    return (
        <Grid className={classes.notificationContainer} container direction='row'>

            <Grid className={classes.iconContainer} item xs={2} sm={1}>
                { notification.type === 'follow' && (<PersonAddIcon color='primary' fontSize='default' />) }
                { notification.type === 'mention' && (<AnnouncementIcon color='primary' fontSize='default' />) }
            </Grid>

            <Grid item xs={10} sm={11}>

                {
                    notification.type === 'follow' && (
                        <Grid className={classes.contentContainer} container direction='column'>
                            <img className={classes.userAvatar} src='https://pbs.twimg.com/profile_images/691196586018344960/Y3KfyJ8m_normal.jpg' />
                            <Typography className={classes.notificationText}>
                                <span className={classes.username}>{notification.username}</span> followed you.
                            </Typography>
                        </Grid>

                    )
                }

                {
                    notification.type === 'mention' && (
                        <Grid className={classes.contentContainer} container direction='column'>
                            <img className={classes.userAvatar} src='https://pbs.twimg.com/profile_images/691196586018344960/Y3KfyJ8m_normal.jpg' />
                            <Typography className={classes.notificationText}>
                                <span className={classes.username}>{notification.username}</span> mentioned you.
                            </Typography>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

export default NotificationItem;
