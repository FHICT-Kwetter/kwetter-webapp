import { fade, makeStyles } from "@material-ui/core";

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
}));

export default useStyles;
