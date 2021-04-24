import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    openSpaceDivider: {
        backgroundColor: theme.palette.background.default,
        height: '15px',
        borderTop: `1px solid ${theme.palette.custom.borderColor}`,
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
    }
}));

export default useStyles;
