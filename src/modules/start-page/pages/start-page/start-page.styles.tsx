import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    container: {
        width: '100vw',
        height: '100vh',
        border: 'none',
        borderRadius: 'unset'
    },

    contentContainer: {
        [theme.breakpoints.down('sm')]: {
            minHeight: '50vh',
            minWidth: '100vw',
        },
        minHeight: '100vh',
    },

    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '48px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '32px',
        },
        fontSize: '54px',
        fontWeight: 600,
        marginBottom: '30px'
    },
    subtitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
        fontSize: '26px',
        fontWeight: 600,
        marginBottom: '30px'
    },

    registerButton: {
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            height: '45px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '240px',
            height: '40px',
        },


        width: '360px',
        height: '45px',
        marginBottom: '20px',
        borderRadius: '30px',
        color: 'rgb(238,240,241)',
    },

    loginButton: {
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            height: '45px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '240px',
            height: '40px',
        },

        width: '360px',
        height: '45px',
        borderRadius: '30px',
        color: 'rgb(238,240,241)',
    }

}));

export default useStyles;
