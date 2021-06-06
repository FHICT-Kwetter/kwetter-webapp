import React from 'react';
import useStyles from "./kweet.styles";
import { Grid } from "@material-ui/core";
import { KweetModel } from "../../../../store/models";
import { getAmountOfTimeSinceDate } from "../../utils/time-util";
import globalConfig from "../../../../global.config";
import GlobalConfig from "../../../../global.config";

interface KweetProps {
    kweet: KweetModel
}

const Kweet: React.FC<KweetProps> = (props: KweetProps) => {

    const [userInfo, setUserInfo] = React.useState<any>({});

    React.useEffect(() => {
        fetch(`${globalConfig.Apis.ProfileService}/${props.kweet.authorId}/userinfo`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string}`,
            },
        }).then(data => data.json()).then(res => setUserInfo(res))
    }, [])

    const { kweet } = props;
    const classes = useStyles();

    return (
        <div className={classes.kweetContainer}>
            <div style={{ display: 'flex', position: 'relative', marginTop: '3px' }}>

                {/* Image of the author */}
                <div>
                    <img
                        style={{ width: '49px', height: '49px', borderRadius: '50%', position: 'absolute', top: '0', left: '0' }}
                        src={`${userInfo.imageUrl}`}
                        alt='profile picture'
                    />
                </div>

                <Grid container direction='column' style={{ marginTop: '2px', width: '100%', paddingLeft: '59px' }}>
                    <Grid container alignItems='center' style={{ fontSize: '15px', whiteSpace: 'nowrap' }}>
                        <strong>{ userInfo.displayName }</strong>
                        <span className={classes.twitterHandleText}>@{ userInfo.username }</span>
                        <div style={{ height: '2px', width: '2px', backgroundColor: 'grey', marginRight: '10px' }} />
                        <time>{getAmountOfTimeSinceDate(kweet.createdAt)}</time>
                    </Grid>

                    {/* The text of the kweet */}
                    <p style={{ fontSize: '14px', marginTop: '4px', fontWeight: 200 }}>
                        {kweet.text.content}
                    </p>


                    {/*/!* If there is an image in the kweet *!/*/}
                    {/*{*/}
                    {/*    kweet.media && kweet.media.type === 'image' && (*/}
                    {/*        <div>*/}
                    {/*            <img style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}*/}
                    {/*                 src={kweet.media.url}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}

                    {/*/!* If there is a video in the kweet *!/*/}
                    {/*{*/}
                    {/*    kweet.media && kweet.media.type === 'video' && (*/}
                    {/*        <div>*/}
                    {/*            <video style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}*/}
                    {/*                   src={kweet.media.url}*/}
                    {/*                   controls*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}

                    {/*/!* If there is a GIF in the kweet *!/*/}
                    {/*{*/}
                    {/*    kweet.media && kweet.media.type === 'gif' && (*/}
                    {/*        <div>*/}
                    {/*            <img style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}*/}
                    {/*                 src={kweet.media.url}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}


                    {/* The bar with the comments, rekweets and likes. */}
                    {/*<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '11px', width: '63%', alignSelf: 'center'}}>*/}
                    {/*    <div style={{ display: 'flex',  alignItems: 'center',  flexWrap: 'wrap'}}>*/}
                    {/*        <SmsOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#acacac' }}/>*/}
                    {/*        <Typography style={{ marginLeft: '10px'}}>{kweet.metrics.commentCount}</Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>*/}
                    {/*        <CompareArrowsOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#66a554' }} />*/}
                    {/*        <Typography style={{ marginLeft: '10px'}}>{kweet.metrics.rekweetCount}</Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>*/}
                    {/*        <FavoriteBorderOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#e22727' }} />*/}
                    {/*        <Typography style={{ marginLeft: '10px'}}>{kweet.metrics.likeCount}</Typography>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </Grid>
            </div>
        </div>
    )
}

export default Kweet;
