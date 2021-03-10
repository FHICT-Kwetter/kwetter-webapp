import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    profileHeaderContainer: {
        paddingTop: '15px',
        position: 'relative',
        borderBottom: '1px solid #2f3336',
        padding: '9px 19px 20px'
    },

    profileNameText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
        color: '#fff',
    },

    profileDescriptionText: {
        fontSize: '15px',
        fontWeight: 200,
        marginTop: '11px',
        fontFamily: 'Roboto',
        color: '#fff'
    },

    profileTweetsText: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: 300,
        color: 'rgb(122, 122, 122)',
    },

    profileImage: {
        width: 'max(45px, min(135px, 22vw))',
        height: 'max(45px, min(135px, 22vw))',
        border: '3.75px solid #000',
        borderRadius: '50%',
        position: 'absolute',
        bottom: 'max(-60px, -10vw)',
        left: '15px'
    },

    profileTwitterHandleText: {
        color: 'grey',
        fontWeight: 300,
        fontSize: '15px'
    },

    text: {
        color: '#fff'
    },
}));

export default useStyles;
