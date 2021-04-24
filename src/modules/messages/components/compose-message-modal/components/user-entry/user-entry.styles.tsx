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
    },
    container: {
        [theme.breakpoints.down('xs')]: {
            width: '350px',
            height: '500px',
        },

        display: 'flex',
        paddingTop: '12px',
        width: '500px',
        height: '500px',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '10px',
        outline: 'none',
        overflowX: 'hidden',
    },
    filterContainer: {
        marginTop: '10px',
        overflowX: 'hidden',
    },
    iconButton: {
        padding: 10,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: '15px',
        fontWeight: 300
    },
    userRowContainer: {
        height: '70px',
        width: '500px',
        overflowX: 'hidden',
        padding: '16px 0px 0px 12px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.palette.background.default
        }
    },
    userImage: {
        borderRadius: '50%',
        width: '38px',
        height: '38px'
    },
    usernameText: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '20px',
        },
        marginLeft: '5px',
        fontSize: '13px',
        fontWeight: 700,
        color: theme.palette.text.primary,
    },
    handleText: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '20px',
        },
        marginLeft: '5px',
        fontSize: '13px',
        fontWeight: 400,
        color: theme.palette.text.secondary,
    }
}));

export default useStyles;
