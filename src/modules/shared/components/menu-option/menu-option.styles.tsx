import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    // icon: {
    //   color: theme.palette.type === 'light' ? '#000' : '#fff',
    // },

    inactiveMenuItem: {
        marginTop: '16px',
        borderRadius: '60px',
        '&:hover': {
            backgroundColor: theme.palette.custom.inactiveIconBackground,
            borderRadius: '60px',
            cursor: 'pointer'
        },
    },
    activeMenuItem: {
        marginTop: '16px',
    },

    inactiveMenuItemText: {
        fontFamily: "Roboto",
        fontSize: "19px",
        fontWeight: 700
    },
    activeMenuItemText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
        color: theme.palette.primary.main,
    },



}));

export default useStyles;
