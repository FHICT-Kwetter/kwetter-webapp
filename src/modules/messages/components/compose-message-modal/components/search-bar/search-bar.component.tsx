import React from 'react';
import { Grid, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./search-bar.styles";

interface SearchBarProps {
    filterText: string;
    setFilterText: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    const classes = useStyles();

    return (
        <Grid className={classes.filterContainer} container direction='row'>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon color='primary' />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search for people"
                inputProps={{ 'aria-label': 'search people' }}
                value={props.filterText}
                onChange={(event) => props.setFilterText(event.target.value)}
            />
        </Grid>
    )
};

export default SearchBar;
