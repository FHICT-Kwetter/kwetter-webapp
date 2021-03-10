import React from 'react';
import Menu from "../../components/menu/menu.component";
import { Grid, InputBase } from "@material-ui/core";
import Profile from "../../components/profile/profile.component";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./profile-page.styles";
import ProfileNotFound from "../../components/profile-not-found/profile-not-found.component";

const ProfilePage: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Menu activeItem={'profile'} />

            <Grid direction='column' style={{
                borderLeft: '1px solid #2f3336',
                borderRight: '1px solid #2f3336',
                height: '100vh',
                backgroundColor: '#000',
                width: 'min(601px, 100%)',
                overflowY: 'auto',
            }
            }>
                <Profile />
            </Grid>



            <Grid direction='column' style={{height: '100vh', padding: '9px 19px 20px', width: 'min(399px, 100%)'}}>
                {/*
                                         ************************************************
                                         *                                              *
                                         *              The Search Bar                  *
                                         *                                              *
                                         ************************************************
                                    */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search Kwetter"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Grid>
        </>
    )
}

export default ProfilePage;
