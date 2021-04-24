import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    profileHeaderContainer: {
        paddingTop: '15px',
        position: 'relative',
        borderBottom: '1px solid #2f3336',
        padding: '9px 19px 20px'
    },
    profileHeaderText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
    },

    profileContainer: {
        padding: 'min(calc(10vw + 7px),67px) 16px 0',
        position: 'relative',
        width: '100%',
        height: 'min(33vw, 199px)',
        backgroundColor: '#C4CFD6'
    },
    profileImage: {
        width: 'max(45px, min(135px, 22vw))',
        height: 'max(45px, min(135px, 22vw))',
        border: '2px solid #000',
        borderRadius: '50%',
        position: 'absolute',
        bottom: 'max(-60px, -10vw)',
        left: '15px',
        backgroundColor: '#F7F9FA'
    },
    profileDescriptionContainer: {
        marginTop: '80px',
        padding: '0px 10px 20px 10px',
        borderBottom: '1px solid #2f3336'
    },
    profileNotExistText: {
        textAlign: 'center',
        marginTop: '40px',
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
    }
}));

export default useStyles;
