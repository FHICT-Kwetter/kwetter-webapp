import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modalCloseButton: {
        marginLeft: '10px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    modalTitle: {
        marginLeft: '10px',
        fontWeight: 600,
        fontSize: '16px',
        color: theme.palette.text.primary,
    },
}));

export default useStyles;
