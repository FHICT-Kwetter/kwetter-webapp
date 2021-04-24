import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

    kweetContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '14px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
        maxWidth: '100%'
    }
}));

export default useStyles;
