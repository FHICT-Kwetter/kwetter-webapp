import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },

    descriptionContainer: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    descriptionText: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 300,
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    button: {
        backgroundColor: theme.palette.error.dark,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.error.main
        }
    },
}));

export default useStyles;
