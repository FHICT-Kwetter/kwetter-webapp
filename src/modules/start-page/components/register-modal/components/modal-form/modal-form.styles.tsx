import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    registerFormTitle: {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 600
    },
    registerForm: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    textField: {
        [theme.breakpoints.down('xs')]: {
            width: '240px',
        },

        marginTop: '15px',
        width: '360px',
    },
    textFieldHint: {
        fontSize: '10px',
        fontWeight: 300,
        marginLeft: '5px',
        marginTop: '5px'
    },
    submitButton: {
        [theme.breakpoints.down('xs')]: {
            width: '240px',
        },

        marginTop: '15px',
        width: '360px',
        height: '45px',
        borderRadius: '30px',
        color: 'rgb(238,240,241)',
    },

    linkText: {
        marginTop: '15px',
        fontSize: '12px',
        fontWeight: 300,
        color: theme.palette.primary.main,
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    dot: {
        padding: '4px',
        width: '2px',
        height: '2px',
        color: theme.palette.custom.borderColor,
        textAlign: 'center',
    }
}));

export default useStyles;
