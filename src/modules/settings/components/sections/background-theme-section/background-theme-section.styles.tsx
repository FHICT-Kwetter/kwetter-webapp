import { makeStyles, Theme } from "@material-ui/core";

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
    titleContainer: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`
    },
    settingContentContainer: {


    },
    backgroundButtonContainer: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-evenly'
        },
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
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
}));

export default useStyles;
