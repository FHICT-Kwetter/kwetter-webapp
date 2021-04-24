import React from 'react';
import { Grid, IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./search-bar.styles";

const SearchBar: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.filterContainer} container direction='column'>
            <Paper component="form" className={classes.root} elevation={0}>
                <IconButton color='primary' type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search for people"
                    inputProps={{ 'aria-label': 'search people' }}
                />
            </Paper>
        </Grid>
    )
};

export default SearchBar;
