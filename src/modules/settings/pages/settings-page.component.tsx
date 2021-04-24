import React from 'react';
import { Tab, Tabs } from "@material-ui/core";
import MainTemplate from "modules/shared/templates/main-template/main-template.component";
import { AccountSettingsTab, DisplaySettingsTab } from 'modules/settings/components/tabs';
import useStyles from "./settings-page.styles";

const SettingsPage: React.FC = () => {

    const [tabIndex, setTabIndex] = React.useState(0);

    const classes = useStyles();

    return (
        <MainTemplate activeMenuOption='settings'>

            <Tabs value={tabIndex} onChange={(event, index) => setTabIndex(index)} indicatorColor='primary' variant='fullWidth'>
                <Tab className={classes.tab} label='Account' />
                <Tab className={classes.tab} label='Display' />
            </Tabs>

            <AccountSettingsTab index={0} tabIndex={tabIndex} />
            <DisplaySettingsTab index={1} tabIndex={tabIndex} />

        </MainTemplate>
    )
}

export default SettingsPage;
