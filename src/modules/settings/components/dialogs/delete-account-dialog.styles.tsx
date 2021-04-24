import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dialogContentText: {
        fontSize: '14px'
    },
    goBackButton: {
        color: theme.palette.text.secondary,
        fontWeight: 400
    },
    deleteButton: {
        color: theme.palette.error.dark,
        fontWeight: 400
    }
}));

export default useStyles;
