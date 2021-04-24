import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mention: {
        color: theme.palette.primary.main,
        '&:hover': {
            textDecorationLine: 'underline',
            cursor: 'pointer'
        }
    }
}));

export default useStyles;
