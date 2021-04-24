import React from 'react';
import { connect } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import { ThemeBackground, ThemeState } from "modules/settings/store/types"
import { changeThemeBackground } from "modules/settings/store/actions"
import useStyles from "./background-theme-section.styles";

interface BackgroundThemeSectionProps {
    changeBackground: (background: ThemeBackground) => void;
    theme: ThemeState
}

const BackgroundThemeSection: React.FC<BackgroundThemeSectionProps> = (props: BackgroundThemeSectionProps) => {

    const classes = useStyles();

    const lightButtonClasses = `${classes.lightButton} ${props.theme.background === 'light' ? classes.selectedButton : ''}`;
    const dimButtonClasses   = `${classes.dimButton}   ${props.theme.background === 'dim'   ? classes.selectedButton : ''}`;
    const darkButtonClasses  = `${classes.darkButton}  ${props.theme.background === 'dark'  ? classes.selectedButton : ''}`;

    const setLightBackground = () => { props.changeBackground('light'); }
    const setDimBackground   = () => { props.changeBackground('dim');   }
    const setDarkBackground  = () => { props.changeBackground('dark');  }

    return (
        <Grid container direction='column'>

            <Grid className={classes.titleContainer} item xs={12}>
                <Typography>Background</Typography>
            </Grid>

            <Grid className={classes.backgroundButtonContainer} container direction='row'>
                <Button className={lightButtonClasses} variant='contained' onClick={setLightBackground}>Light</Button>
                <Button className={dimButtonClasses} variant='contained' onClick={setDimBackground}>Dim</Button>
                <Button className={darkButtonClasses} variant='contained' onClick={setDarkBackground}>Dark</Button>
            </Grid>

        </Grid>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    changeBackground: (background: ThemeBackground) => dispatch(changeThemeBackground(background)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundThemeSection);
