import { makeStyles } from "@material-ui/core";
import image from "../../../../assets/starting-page-image.jpg";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        border: 'none',
        borderRadius: 'unset'
    },
    pageContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            minWidth: '100vw'
        },
        display: 'flex',
        flexDirection: 'row',
    },
    imageContainer: {
        [theme.breakpoints.down('sm')]: {
            minHeight: '50vh',
            minWidth: '100vw',
        },
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default useStyles;
