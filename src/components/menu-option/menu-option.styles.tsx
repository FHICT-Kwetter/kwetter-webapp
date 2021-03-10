import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    inactiveMenuItem: {
        marginTop: '16px',
        borderRadius: '60px',
        '&:hover': {
            backgroundColor: '#2c8ed6',
            borderRadius: '60px',
            cursor: 'pointer'
        },
    },
    activeMenuItem: {
        marginTop: '16px',
    },

    inactiveMenuItemText: {
        color: '#fff',
        fontFamily: "Roboto",
        fontSize: "19px",
        fontWeight: 700
    },
    activeMenuItemText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
        color: '#33a1f2',
    },



}));

export default useStyles;
