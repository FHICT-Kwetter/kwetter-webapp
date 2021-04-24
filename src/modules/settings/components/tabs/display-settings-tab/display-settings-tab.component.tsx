import React from 'react';
import { Grid, Typography } from "@material-ui/core";

import { TabPanel, OpenSpaceDivider } from 'modules/shared/components';
import { BackgroundThemeSection, ColorThemeSection } from 'modules/settings/components/sections';
import useStyles from "./display-settings-tab.styles";

interface DisplaySettingsTabProps {
    index: number;
    tabIndex: number;
}

const DisplaySettingsTab: React.FC<DisplaySettingsTabProps> = (props: DisplaySettingsTabProps) => {

    const classes = useStyles();

    return (
        <TabPanel value={props.tabIndex} index={props.index}>

            <Grid className={classes.descriptionContainer} container direction='column'>
                <Typography className={classes.descriptionText}>Manage your theme settings. These settings affect all the Kwetter accounts on this browser.</Typography>
            </Grid>

            <OpenSpaceDivider />
            <BackgroundThemeSection />

            <OpenSpaceDivider />
            <ColorThemeSection />

        </TabPanel>
    )
}

export default DisplaySettingsTab;
