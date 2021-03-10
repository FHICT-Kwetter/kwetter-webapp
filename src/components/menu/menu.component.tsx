import React from 'react';
import KwetterIcon from "../../assets/logo512.png";
import useStyles from "./menu.styles";
import MenuOption from "../menu-option/menu-option.component";
import { Grid, MenuList } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

/**
 * Defines the properties for the Menu component.
 */
interface MenuProps {
    /**
     * The name of the active item
     */
    activeItem: 'home' | 'explore' | 'notifications' | 'messages' | 'profile';
}

/**
 * Defines the menu component.
 *
 * @param props The properties passed into the component.
 */
const Menu: React.FC<MenuProps> = ({ activeItem }) => {
    const classes = useStyles();

    const homeIconStyles          =  activeItem === 'home'          ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const exploreIconStyles       =  activeItem === 'explore'       ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const notificationIconStyles  =  activeItem === 'notifications' ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const messagesIconStyles      =  activeItem === 'messages'      ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const profileIconStyles       =  activeItem === 'profile'       ? classes.activeMenuIcon : classes.inactiveMenuIcon;

    const homeIcon          = <HomeOutlinedIcon              fontSize="large" className={homeIconStyles} />;
    const exploreIcon       = <ExploreOutlinedIcon           fontSize="large" className={exploreIconStyles} />;
    const notificationsIcon = <NotificationsNoneOutlinedIcon fontSize="large" className={notificationIconStyles} />;
    const emailIcon         = <EmailOutlinedIcon             fontSize="large" className={messagesIconStyles} />;
    const profileIcon       = <PersonOutlineOutlinedIcon     fontSize="large" className={profileIconStyles} />;

    return (
        <MenuList className={classes.menuContainer}>
            <MenuOption text='Home'          active={activeItem === 'home'}          icon={homeIcon} />
            <MenuOption text='Explore'       active={activeItem === 'explore'}       icon={exploreIcon} />
            <MenuOption text='Notifications' active={activeItem === 'notifications'} icon={notificationsIcon} />
            <MenuOption text='Messages'      active={activeItem === 'messages'}      icon={emailIcon} />
            <MenuOption text='Profile'       active={activeItem === 'profile'}       icon={profileIcon} />
        </MenuList>
    )
}

export default Menu;
