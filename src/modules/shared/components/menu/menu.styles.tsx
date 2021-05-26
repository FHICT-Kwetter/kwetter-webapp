import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuContainer: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '105px',
            width: '105px',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: ''
        },
        padding: '9px 19px 20px',
        height: '100vh',
        maxWidth: '255px',
        width: '255px',
        borderRight: `1px solid ${theme.palette.custom.borderColor}`,
        '&:focus': {
            outline: 'none',
        }
    },
    inactiveMenuItem: {
        marginTop: '16px',
        borderRadius: '60px',
        '&:hover': {
            backgroundColor: theme.palette.custom.inactiveIconBackground,
            borderRadius: '60px',
            cursor: 'pointer'
        },
    },
    inactiveMenuItemText: {
        fontFamily: "Roboto",
        fontSize: "19px",
        fontWeight: 700
    },
    activeMenuIcon: {
        color: theme.palette.primary.main,
    },
    inactiveMenuIcon: {
        color: theme.palette.custom.inactiveIcon,
    },

    bottomMenuContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        borderTop: `1px solid ${theme.palette.custom.borderColor}`,
        height: '50px'
    },
    bottomNavbar: {
        marginBottom: '10px',
        height: '40px'
    }
}));

export default useStyles;
