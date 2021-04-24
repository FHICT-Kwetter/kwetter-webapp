import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        paddingTop: '15px',
        position: 'relative',
        padding: '9px 19px 20px',
        height: '60px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
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
        width: '100px',
        height: '40px',
        fontSize: '12px',
        alignSelf: 'center',
        borderRadius: '20px'
    }
}));

export default useStyles;
