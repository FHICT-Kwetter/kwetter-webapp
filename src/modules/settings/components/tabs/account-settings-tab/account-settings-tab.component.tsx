import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { DeleteAccountSection } from "modules/settings/components/sections";
import { TabPanel, OpenSpaceDivider } from 'modules/shared/components';
import useStyles from "./account-settings-tab.styles";

interface AccountSettingsTabProps {
    index: number;
    tabIndex: number;
}

const AccountSettingsTab: React.FC<AccountSettingsTabProps> = (props: AccountSettingsTabProps) => {

    const classes = useStyles();

    return (
        <TabPanel value={props.tabIndex} index={props.index}>

            <Grid className={classes.descriptionContainer} container direction='column'>
                <Typography className={classes.descriptionText}>Manage your account settings.</Typography>
            </Grid>

            <OpenSpaceDivider />

            <DeleteAccountSection />

        </TabPanel>
    )
};

export default AccountSettingsTab;
