import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        borderRight: `1px solid ${theme.palette.custom.borderColor}`,
        height: '100vh',
        width: 'min(601px, 100%)',
        overflowY: 'auto',
        flexWrap: 'nowrap'
    },
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
    mainContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
        height: '100vh',
        display: 'flex',
        justifyContent: 'start',
        maxWidth: '1280px',
        margin: '0 auto',
        flexDirection: 'row',
        border: 'none',
        '&:focus': {
            outline: 'none',
        }
    },
}));

export default useStyles;
