import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        paddingTop: '15px',
        position: 'relative',
        padding: '9px 19px 20px',
        height: '50px'
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
    },

    tabPanelContainer: {
        padding: '40px 20px'
    },

    tab: {
        textTransform: 'none',
        borderBottom: '1px solid grey'
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
    }
}));

export default useStyles;
