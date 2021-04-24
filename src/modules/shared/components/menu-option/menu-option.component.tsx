import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ListItemIcon, MenuItem, SvgIconProps, Typography, Tooltip, Zoom } from "@material-ui/core";
import useStyles from "./menu-option.styles";

interface MenuOptionProps extends RouteComponentProps {
    text: string,
    active: boolean,
    icon: React.ReactElement<SvgIconProps>,
    tooltip: string,
    link: string,
}

const MenuOption: React.FC<MenuOptionProps> = ({ text, active, icon, tooltip, history, link }) => {

    const classes = useStyles();

    const menuItemStyles = active ? classes.activeMenuItem : classes.inactiveMenuItem;
    const menuItemTextStyles = active ? classes.activeMenuItemText : classes.inactiveMenuItemText;

    const onLinkClick = () => {
        history.push(link);
    }

    return (
        <Tooltip title={tooltip} TransitionComponent={Zoom} enterDelay={50} leaveDelay={50} placeholder='bottom' arrow={true}>
            <MenuItem className={menuItemStyles} onClick={onLinkClick}>
                <ListItemIcon>{ icon }</ListItemIcon>
                <Typography className={menuItemTextStyles}>{ text }</Typography>
            </MenuItem>
        </Tooltip>
    )
}

export default withRouter(MenuOption);
