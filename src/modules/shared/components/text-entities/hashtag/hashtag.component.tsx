import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import useStyles from "./hashtag.styles";

interface HashtagProps extends RouteComponentProps<any> { }

const Hashtag: React.FC<HashtagProps> = ({ children, history }) => {

    const classes = useStyles();
    const text = children as string;

    return (
        <Link className={classes.hashtag} to={`/hashtag/${text.substring(1)}`}>
            <span>{children}</span>
        </Link>
    )
};

export default withRouter(Hashtag);
