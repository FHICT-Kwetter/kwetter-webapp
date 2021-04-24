import React from 'react';
import { Grid, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./search-bar.styles";
import { useWindowSize } from "../../utils/use-window-size";

const SearchBar: React.FC = () => {

    const classes = useStyles();
    const width = useWindowSize().width;

    return (
        <>
            {
                width && width > 960
                    ?
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
                    :
                    null
            }
        </>
    )
}

export default SearchBar;
