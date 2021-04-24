import React from 'react';
import { Box } from "@material-ui/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {

    const { children, index, value } = props;

    return (
        <div role='tabpanel' hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
            {
                value === index && (<Box>{children}</Box>)
            }
        </div>
    )
};

export default TabPanel;
