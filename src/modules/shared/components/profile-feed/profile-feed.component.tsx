import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from 'modules/shared/components/profile-feed/profile-feed.styles';
import Kweet from 'modules/shared/components/kweet/kweet.component';
import FakeKweets from 'store/kweets';

const ProfileFeed: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container direction='column'>
            <div className={classes.feedTitleContainer}>
                Kweets
            </div>

            <Grid container direction='column'>
                {
                    FakeKweets.map(kweet => <Kweet kweet={kweet} />)
                }
            </Grid>
        </Grid>
    )
}

export default ProfileFeed;
