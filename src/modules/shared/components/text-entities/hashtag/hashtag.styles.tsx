import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    hashtag: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecorationLine: 'underline',
            cursor: 'pointer'
        }
    }
}));

export default useStyles;
