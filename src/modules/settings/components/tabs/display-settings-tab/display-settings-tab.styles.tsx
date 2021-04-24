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

const createBackgroundButton = (theme: Theme) => {
    return {
        [theme.breakpoints.down('xs')]: {
            width: '70px',
            minWidth: '70px',
            height: '35px',
        },

        width: '100px',
        height: '35px'
    }
}

const useStyles = makeStyles((theme) => ({
    descriptionContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '63px',
        padding: '12px 16px',
    },
    descriptionText: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 300,
    },

    settingTitleContainer: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    settingContentContainer: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    backgroundButtonContainer: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-evenly'
        },

        justifyContent: 'space-evenly'
    },


    selectedButton: {
        border: `2px solid ${theme.palette.primary.main}`
    },
    lightButton: {
        ...createBackgroundButton(theme),
        color: 'rgb(15, 20, 25)',
        backgroundColor: 'rgb(247, 249, 250)'
    },
    dimButton: {
        ...createBackgroundButton(theme),
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(25, 39, 52)'
    },
    darkButton: {
        ...createBackgroundButton(theme),
        color: 'rgb(217, 217, 217)',
        backgroundColor: 'rgb(21, 24, 28)'
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
