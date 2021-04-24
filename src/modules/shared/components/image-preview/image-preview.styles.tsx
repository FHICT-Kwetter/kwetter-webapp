import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    closeIcon: {
        marginLeft: '80px',
        fontSize: '15px',
        '&:hover': {
            cursor: 'pointer'
        },
        padding: '0px',
        margin: '0px'
    },
    previewImageContainer: {
        maxWidth: '100px',
        maxHeight: '100px',
        width: '100px',
        height: '100px',
        border: `2px solid ${theme.palette.text.primary}`,
        marginLeft: '10px',
        marginTop: '5px',
        marginBottom: '5px',
        padding: 0,
    },
    previewImage: {
        maxWidth: '100px',
        maxHeight: '85px',
        margin: 0,
        padding: 0,
        width: '95px',
        minWidth: '95px',
        height: '75px',
        marginBottom: '5px',
        paddingBottom: '5px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
}));

export default useStyles;
