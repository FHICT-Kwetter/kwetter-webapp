import React from 'react';
import { Tab, Tabs } from "@material-ui/core";
import MainTemplate from "../../shared/templates/main-template/main-template.component";
import { TabPanel } from "modules/shared/components";
import NotificationTab from "../components/notification-tab/notification-tab.component";
import MentionsTab from "../components/mentions-tab/mentions-tab.component";
import useStyles from './notification-page.styles'

const NotificationPage: React.FC = () => {

    const [tabIndex, setTabIndex] = React.useState(0);
    const classes = useStyles();

    return (
        <MainTemplate activeMenuOption='notifications'>

            <Tabs value={tabIndex} onChange={(e, value) => setTabIndex(value)} indicatorColor='primary' variant='fullWidth'>
                <Tab className={classes.tab} label='All' />
                <Tab className={classes.tab} label='Mentions' />
            </Tabs>

            <TabPanel value={tabIndex} index={0}>
              <NotificationTab />
            </TabPanel>

            <TabPanel value={tabIndex} index={1}>
                <MentionsTab />
            </TabPanel>

        </MainTemplate>
    )
}

export default NotificationPage;
