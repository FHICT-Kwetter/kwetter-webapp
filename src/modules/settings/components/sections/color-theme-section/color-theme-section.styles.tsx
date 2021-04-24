import { makeStyles, Theme } from "@material-ui/core";

const createColorButton = (theme: Theme) => {
    return {
        [theme.breakpoints.down('xs')]: {
            width: '35px',
            minWidth: '35px',
            height: '35px',
        },

        width: '50px',
        minWidth: '50px',
        height: '50px',
        borderRadius: '50%',
    }
}

const useStyles = makeStyles((theme) => ({

    settingTitleContainer: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    settingContentContainer: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },

    colorButtonsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    colorButton: {
        width: '50px',
        minWidth: '50px',
        height: '50px',
        borderRadius: '50%',
    },
    blueButton: {
        ...createColorButton(theme),
        backgroundColor: 'rgb(29, 161, 242)',
        '&:hover': {
            backgroundColor: 'rgb(29, 161, 242)',
        }
    },
    yellowButton: {
        ...createColorButton(theme),
        backgroundColor: 'rgb(255, 173, 32)',
        '&:hover': {
            backgroundColor: 'rgb(255, 173, 32)',
        }
    },
    pinkButton: {
        ...createColorButton(theme),
        backgroundColor: 'rgb(224, 36, 94)',
        '&:hover': {
            backgroundColor: 'rgb(224, 36, 94)',
        }
    },
    purpleButton: {
        ...createColorButton(theme),
        backgroundColor: 'rgb(121, 75, 196)',
        '&:hover': {
            backgroundColor: 'rgb(121, 75, 196)',
        }
    },
    orangeButton: {
        ...createColorButton(theme),
        backgroundColor: 'rgb(244, 93, 34)',
        '&:hover': {
            backgroundColor: 'rgb(244, 93, 34)',
        }
    },
    greenButton: {
        ...createColorButton(theme),
        backgroundColor: 'rgb(23, 191, 99)',
        '&:hover': {
            backgroundColor: 'rgb(23, 191, 99)',
        }
    },
}));

export default useStyles;
