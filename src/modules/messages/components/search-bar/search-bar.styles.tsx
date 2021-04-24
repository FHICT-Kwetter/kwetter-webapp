import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        width: 'min(601px, 100%)',
        height: '70px',
        borderRight: `1px solid ${theme.palette.custom.borderColor}`,
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
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
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: '15px'
    },
    iconButton: {
        padding: 10,
    },
}));

export default useStyles;
