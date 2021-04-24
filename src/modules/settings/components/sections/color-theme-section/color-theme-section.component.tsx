import React from 'react';
import { connect } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { changeThemeColor, ThemeColor, ThemeState } from "modules/settings/store"
import useStyles from "./color-theme-section.styles";

interface ColorThemeSectionProps {
    changeColor: (color: ThemeColor) => void;
    theme: ThemeState
}

const ColorThemeSection: React.FC<ColorThemeSectionProps> = (props: ColorThemeSectionProps) => {

    const classes = useStyles();

    return (
        <Grid container direction='column'>

            <Grid className={classes.settingTitleContainer} item xs={12}>
                <Typography>Color</Typography>
            </Grid>

            <Grid className={classes.settingContentContainer} item xs={12}>

                <Grid className={classes.colorButtonsContainer} container direction='row'>
                    <Button className={classes.blueButton} onClick={() => props.changeColor('blue')}>
                        { props.theme.color === 'blue' && (<DoneIcon fontSize='small' />) }
                    </Button>

                    <Button className={classes.yellowButton} onClick={() => props.changeColor('yellow')}>
                        { props.theme.color === 'yellow' && (<DoneIcon fontSize='small' />) }
                    </Button>


                    <Button className={classes.pinkButton} onClick={() => props.changeColor('pink')}>
                        { props.theme.color === 'pink' && (<DoneIcon fontSize='small' />) }
                    </Button>


                    <Button className={classes.purpleButton} onClick={() => props.changeColor('purple')}>
                        { props.theme.color === 'purple' && (<DoneIcon fontSize='small' />) }
                    </Button>


                    <Button className={classes.orangeButton} onClick={() => props.changeColor('orange')}>
                        { props.theme.color === 'orange' && (<DoneIcon fontSize='small' />) }
                    </Button>


                    <Button className={classes.greenButton} onClick={() => props.changeColor('green')}>
                        { props.theme.color === 'green' && (<DoneIcon fontSize='small' />) }
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    changeColor: (color: ThemeColor) => dispatch(changeThemeColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorThemeSection);
