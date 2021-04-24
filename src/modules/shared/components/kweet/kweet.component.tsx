import React from 'react';
import useStyles from "./kweet.styles";
import { Grid, Typography } from "@material-ui/core";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import CompareArrowsOutlinedIcon from "@material-ui/icons/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { KweetModel } from "../../../../store/models";
import { getAmountOfTimeSinceDate } from "../../utils/time-util";
import Hashtag from "../text-entities/hashtag/hashtag.component";
import Mention from "../text-entities/mention/mention.component";


interface KweetProps {
    kweet: KweetModel
}

const Kweet: React.FC<KweetProps> = (props: KweetProps) => {



    const { kweet } = props;
    const classes = useStyles();

    return (
        <div className={classes.kweetContainer}>
            <div style={{ display: 'flex', position: 'relative', marginTop: '3px' }}>

                {/* Image of the author */}
                <div>
                    <img
                        style={{ width: '49px', height: '49px', borderRadius: '50%', position: 'absolute', top: '0', left: '0' }}
                        src='https://cdn5.vectorstock.com/i/thumb-large/17/59/default-placeholder-businessman-half-length-portr-vector-21181759.jpg'
                        alt='profile picture'
                    />
                </div>

                <Grid container direction='column' style={{ marginTop: '2px', width: '100%', paddingLeft: '59px' }}>
                    <Grid container alignItems='center' style={{ fontSize: '15px', whiteSpace: 'nowrap' }}>
                        <strong>{ kweet.author }</strong>
                        <span className={classes.twitterHandleText}>@{ kweet.username }</span>
                        <div style={{ height: '2px', width: '2px', backgroundColor: 'grey', marginRight: '10px' }} />
                        <time>{getAmountOfTimeSinceDate(kweet.date)}</time>
                    </Grid>

                    {/* The text of the kweet */}
                    <p style={{ fontSize: '14px', marginTop: '4px', fontWeight: 200 }}>
                        Test <Mention>@dirk_heijnen</Mention> {kweet.text.content} <Hashtag>#Test</Hashtag>.
                    </p>


                    {/* If there is an image in the kweet */}
                    {
                        kweet.media && kweet.media.type === 'image' && (
                            <div>
                                <img style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}
                                     src={kweet.media.url}
                                />
                            </div>
                        )
                    }

                    {/* If there is a video in the kweet */}
                    {
                        kweet.media && kweet.media.type === 'video' && (
                            <div>
                                <video style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}
                                       src={kweet.media.url}
                                       controls
                                />
                            </div>
                        )
                    }

                    {/* If there is a GIF in the kweet */}
                    {
                        kweet.media && kweet.media.type === 'gif' && (
                            <div>
                                <img style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}
                                     src={kweet.media.url}
                                />
                            </div>
                        )
                    }


                    {/* The bar with the comments, rekweets and likes. */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '11px', width: '63%', alignSelf: 'center'}}>
                        <div style={{ display: 'flex',  alignItems: 'center',  flexWrap: 'wrap'}}>
                            <SmsOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#acacac' }}/>
                            <Typography style={{ marginLeft: '10px'}}>{kweet.metrics.commentCount}</Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <CompareArrowsOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#66a554' }} />
                            <Typography style={{ marginLeft: '10px'}}>{kweet.metrics.rekweetCount}</Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <FavoriteBorderOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#e22727' }} />
                            <Typography style={{ marginLeft: '10px'}}>{kweet.metrics.likeCount}</Typography>
                        </div>
                    </div>


                </Grid>
            </div>
        </div>
    )
}

export default Kweet;
