import React from 'react';
import useStyles from "./profile-feed.styles";
import { Grid } from "@material-ui/core";
import Kweet from "../kweet/kweet.component";

const ProfileFeed: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container direction='column'>
                <div style={
                    {
                        color: '#33a1f2',
                        borderBottom: '2px solid #33a1f2',
                        cursor: 'pointer',
                        marginTop: '10px',
                        padding: '11px 0 15px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        outline: '0px'
                    }
                }>
                    Kweets
                </div>
            </Grid>


            <Grid container direction='column'>
                {
                    [...Array(10)].map(i => <Kweet />)
                }
            </Grid>
        </>
    )
}

export default ProfileFeed;
