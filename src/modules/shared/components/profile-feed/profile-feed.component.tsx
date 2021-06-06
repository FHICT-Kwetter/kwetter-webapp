import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from 'modules/shared/components/profile-feed/profile-feed.styles';
import globalConfig from "../../../../global.config";
import GlobalConfig from "../../../../global.config";
import { KweetModel } from "../../../../store/models";
import Kweet from "../kweet/kweet.component";

interface ProfileFeedProps {
    authorId: string;
}

const ProfileFeed: React.FC<ProfileFeedProps> = (props: ProfileFeedProps) => {

    const classes = useStyles();

    const [kweets, setKweets] = React.useState<KweetModel[]>([]);

    React.useEffect(() => {
        fetch(`${globalConfig.Apis.KweetService}/authors/${props.authorId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
            },
        }).then(data => data.json()).then(res => setKweets(res))
    }, [])


    return (
        <Grid container direction='column'>
            <div className={classes.feedTitleContainer}>
                Kweets
            </div>

            <Grid container direction='column'>
                {
                    kweets.sort((a, b) => { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() })
                        .map(kweet => <Kweet kweet={kweet} />)
                }
            </Grid>
        </Grid>
    )
}

export default ProfileFeed;
