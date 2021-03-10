import React from 'react';
import useStyles from "./kweet.styles";
import { Grid, Typography } from "@material-ui/core";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import CompareArrowsOutlinedIcon from "@material-ui/icons/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const Kweet: React.FC = () => {

    const classes = useStyles();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', borderBottom: '1px solid #2f3336', maxWidth: '100%'}}>
            <div style={{ display: 'flex', position: 'relative', marginTop: '3px' }}>
                <div>
                    <img
                        style={{ width: '49px', height: '49px', borderRadius: '50%', position: 'absolute', top: '0', left: '0' }}
                        src='https://cdn5.vectorstock.com/i/thumb-large/17/59/default-placeholder-businessman-half-length-portr-vector-21181759.jpg'
                        alt='profile picture'
                    />
                </div>
                <Grid container direction='column' style={{ marginTop: '2px', width: '100%', paddingLeft: '59px' }}>
                    <Grid container alignItems='center' style={{ fontSize: '15px', whiteSpace: 'nowrap' }}>
                        <strong className={classes.text}>Dirk Heijnen</strong>
                        <span className={classes.twitterHandleText}>@dirk_heijnen</span>
                        <div style={{ height: '2px', width: '2px', backgroundColor: 'grey', marginRight: '10px' }} />
                        <time className={classes.text}>2m</time>
                    </Grid>
                    <p style={{ fontSize: '14px', marginTop: '4px', color: '#fff', fontWeight: 200 }}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div>
                        <img style={{ marginTop: '12px', width: '100%', height: 'min(285px, max(175px, 41vw))', borderRadius: '14px'}}
                             src='https://i.pinimg.com/736x/43/d5/72/43d5728733b3bbce6b9c2dc6893221a0.jpg'
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '11px', width: '63%', alignSelf: 'center'}}>
                        <span>
                            <SmsOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#acacac' }}/>
                            <Typography className={classes.text}>69</Typography>
                        </span>
                        <span>
                            <CompareArrowsOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#66a554' }} />
                            <Typography className={classes.text}>83</Typography>
                        </span>
                        <span>
                            <FavoriteBorderOutlinedIcon className={classes.tweetActionIcon} style={{ color: '#e22727' }} />
                            <Typography className={classes.text}>62</Typography>
                        </span>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default Kweet;
