import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        borderLeft: '1px solid #2f3336',
        borderRight: '1px solid #2f3336',
        height: '100vh',
        backgroundColor: '#000',
        width: 'min(601px, 100%)',
        overflowY: 'auto'
    },
}));

export default useStyles;
