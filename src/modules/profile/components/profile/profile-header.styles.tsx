import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    profileImageContainer: {
        position: 'relative',
        padding: 'min(150px) 16px 0',
        width: '100%',
        height: 'min(33vw, 199px)',
        backgroundImage: "url('https://1.bp.blogspot.com/-lg73Nw76yCc/V9_EnSSngLI/AAAAAAAAWxY/bQtB8s4wWPsvzsac3xZYbP--23d-KugzwCLcB/s1600/StarCIO%2BLess%2BCode.jpg')"
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

    ownProfileContentContainer: {
        marginTop: '50px',
        padding: '5px 10px'
    },
    profileContentContainer: {
        marginTop: '80px',
        padding: '5px 10px'
    },
    profileNameText: {
        fontFamily: 'Roboto',
        fontSize: '19px',
        fontWeight: 700,
    },
    profileTwitterHandleText: {
        color: 'grey',
        fontWeight: 300,
        fontSize: '15px'
    },
    profileDescriptionText: {
        fontSize: '15px',
        fontWeight: 200,
        marginTop: '11px',
        fontFamily: 'Roboto',
    },

    profileStatsContainer: {
        marginTop: '20px'
    },
    profileStatsSeparator: {
        marginLeft: '20px',
    },
}));

export default useStyles;
