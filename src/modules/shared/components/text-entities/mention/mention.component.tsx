import React from 'react';
import useStyles from "./mention.styles";

const Mention: React.FC = ({ children }) => {

    const classes = useStyles();

    return (
        <span className={classes.mention}>{children}</span>
    )
};

export default Mention;
