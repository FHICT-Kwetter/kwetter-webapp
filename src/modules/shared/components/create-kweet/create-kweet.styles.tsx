import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    profileImage: {
        marginTop: '15px',
        marginLeft: '16px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        bottom: 'max(-60px, -10vw)',
        left: '15px'
    },
    divider: {
        marginTop: '5px',
        marginBottom: '10px'
    },

    imageUploadButton: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    previewContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 'min(570px, 95%)',
        padding: '6px',
        border: `2px solid ${theme.palette.custom.borderColor}`
    },
    previewImage: {
        border: `2px solid ${theme.palette.text.primary}`,
        margin: '2px',
        width: '100px',
        height: '100px',
    },
    actionContainer: {
        width: 'min(570px, 95%)',
    },
    kweetButton: {
        color: '#fff',
        borderRadius: '20px',
        width: '80px',
        height: '40px',
        fontSize: '12px',
        marginLeft: '-10px'
    },
    kweetTextBox: {
        padding: '12px 0',
        border: 'none',
        width: 'min(570px, 95%)'
    },
    kweetTextBoxEndContainer: {
        marginTop: '10px',
        backgroundColor: theme.palette.background.default,
        height: '15px',
        borderTop: `1px solid ${theme.palette.custom.borderColor}`,
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
    }
}));

export default useStyles;
