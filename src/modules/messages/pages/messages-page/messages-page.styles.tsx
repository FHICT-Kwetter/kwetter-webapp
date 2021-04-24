import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        borderRight: `1px solid ${theme.palette.custom.borderColor}`,
        height: '100vh',
        width: 'min(1000px, 100%)',
        overflowY: 'auto',
    },
    headerContainer: {
        paddingTop: '15px',
        position: 'relative',
        padding: '9px 19px 20px',
        height: '60px',
        width: 'min(601px, 100%)',
        borderBottom:`1px solid ${theme.palette.custom.borderColor}`
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
    },
    createConversationIcon: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '20px',
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    filterContainer: {
        width: 'min(601px, 100%)',
        height: '70px',
        borderRight: `1px solid ${theme.palette.custom.borderColor}`,
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
    },
    iconButton: {
        padding: 10,
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: 'min(580px, 95%)',
        height: '44px',
        marginTop: '12px',
        marginLeft: '10px',
        borderRadius: '20px',
        backgroundColor: '#EBEEF0',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: '15px'
    },
    tabPanelContainerNewUser: {
        padding: '40px 20px'
    },
    emptyTitle: {
        fontSize: '19px',
        fontWeight: 500,
        textAlign: 'center'
    },
    emptyDescription: {
        fontSize: '13px',
        fontWeight: 200,
        textAlign: 'center',
        marginTop: '10px'
    },
    startButton: {
        marginTop: '20px',
        color: '#fff',
        width: '180px',
        height: '40px',
        fontSize: '12px',
        alignSelf: 'center',
        borderRadius: '20px'
    },
    userRowContainer: {
        height: '70px',
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
        fontWeight: 700
    },
    handleText: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '20px',
        },
        marginLeft: '5px',
        fontSize: '13px',
        fontWeight: 400,
        color: 'rgb(91, 112, 131)',
    }
}));

export default useStyles;
