import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    descriptionContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '63px',
        padding: '12px 16px',
    },
    descriptionText: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 300,
    },
}));

export default useStyles;
