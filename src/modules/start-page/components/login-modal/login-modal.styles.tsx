import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
    },
    modalTitle: {
        fontWeight: 600,
        fontSize: '16px',
        color: theme.palette.text.primary,
    },
    modalCloseButton: {
        marginLeft: '10px',
        '&:hover': {
            cursor: 'pointer'
        }
    }
}));

export default useStyles;
