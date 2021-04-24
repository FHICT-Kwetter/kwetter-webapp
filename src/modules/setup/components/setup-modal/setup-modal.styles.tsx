import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
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
}));

export default useStyles;
