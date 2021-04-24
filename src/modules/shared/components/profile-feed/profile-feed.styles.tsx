import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    feedTitleContainer: {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        cursor: 'pointer',
        marginTop: '10px',
        padding: '11px 0 15px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '15px',
        outline: '0px'
    }
}));

export default useStyles;
