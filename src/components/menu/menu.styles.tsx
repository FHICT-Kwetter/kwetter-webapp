import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuContainer: {
        height: '100vh',
        padding: '9px 19px 20px',
        maxWidth: '255px',
        width: '255px'
    },
    activeMenuIcon: {
        color: '#33a1f2'
    },
    inactiveMenuIcon: {
        color: '#fff'
    },
}));

export default useStyles;
