import React from 'react';
import { ListItemIcon, MenuItem, SvgIconProps, Typography } from "@material-ui/core";
import useStyles from "./menu-option.styles";

/**
 * Defines the properties for the Menu component.
 */
interface MenuOptionProps {

    /**
     * The text of the menu option.
     */
    text: string,

    /**
     * Indicated whether the menu option is active or not.
     */
    active: boolean,

    /**
     * The icon component which is shown in the menu.
     */
    icon: React.ReactElement<SvgIconProps>,
}

/**
 * Defines the menu options component.
 *
 * @param props The properties passed into the component.
 */
const MenuOption: React.FC<MenuOptionProps> = ({ text, active, icon }) => {

    const classes = useStyles();

    const menuItemStyles = active ? classes.activeMenuItem : classes.inactiveMenuItem;
    const menuItemTextStyles = active ? classes.activeMenuItemText : classes.inactiveMenuItemText;

    return (
        <MenuItem className={menuItemStyles}>

            <ListItemIcon>
                { icon }
            </ListItemIcon>

            <Typography className={menuItemTextStyles}>
                { text }
            </Typography>
            
        </MenuItem>
    )
}

export default MenuOption;
