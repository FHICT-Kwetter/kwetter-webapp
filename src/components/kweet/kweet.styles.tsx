import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#fff'
    },
    tweetActionIcon: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    twitterHandleText: {
        marginLeft: '5px',
        marginRight: '10px',
        color: 'grey',
        fontWeight: 300,
        fontSize: '15px'
    },
}));

export default useStyles;
