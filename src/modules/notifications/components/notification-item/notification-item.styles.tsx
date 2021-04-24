import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    notificationContainer: {
        height: '90px',
        width: '100%',
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.palette.custom.backgroundHover,
        }
    },
    notificationText: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
        fontSize: '14px',
        fontWeight: 300,
        marginTop: '10px',
    },
    username: {
        fontWeight: 600,
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: '15px',
    },
    userAvatar: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default useStyles;
