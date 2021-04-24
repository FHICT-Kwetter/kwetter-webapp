import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import useStyles from "./menu.styles";

import MenuOption from "../menu-option/menu-option.component";
import { BottomNavigation, BottomNavigationAction, Grid, MenuList } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { useWindowSize } from "../../utils/use-window-size";


interface MenuProps extends RouteComponentProps {
    activeItem: 'home' | 'explore' | 'notifications' | 'messages' | 'profile' | 'settings' ;
}

const Menu: React.FC<MenuProps> = ({ activeItem, history }) => {

    const [speedDialOpen, setSpeedDialOpen] = React.useState(false);

    const width = useWindowSize().width;

    const classes = useStyles();

    const homeIconStyles          =  activeItem === 'home'          ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const exploreIconStyles       =  activeItem === 'explore'       ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const notificationIconStyles  =  activeItem === 'notifications' ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const messagesIconStyles      =  activeItem === 'messages'      ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const profileIconStyles       =  activeItem === 'profile'       ? classes.activeMenuIcon : classes.inactiveMenuIcon;
    const settingsIconStyles      =  activeItem === 'settings'      ? classes.activeMenuIcon : classes.inactiveMenuIcon;

    const homeIcon          = <HomeOutlinedIcon              fontSize={width && width > 450 ? "large" : "default" } className={homeIconStyles}         />;
    const exploreIcon       = <ExploreOutlinedIcon           fontSize={width && width > 450 ? "large" : "default" } className={exploreIconStyles}      />;
    const notificationsIcon = <NotificationsNoneOutlinedIcon fontSize={width && width > 450 ? "large" : "default" } className={notificationIconStyles} />;
    const emailIcon         = <EmailOutlinedIcon             fontSize={width && width > 450 ? "large" : "default" } className={messagesIconStyles}     />;
    const profileIcon       = <PersonOutlineOutlinedIcon     fontSize={width && width > 450 ? "large" : "default" } className={profileIconStyles}      />;
    const settingsIcon      = <SettingsOutlinedIcon          fontSize={width && width > 450 ? "large" : "default" } className={settingsIconStyles}     />;
    const moreIcon          = <MoreHorizOutlinedIcon         fontSize={width && width > 450 ? "large" : "default" } />;


    return (
        <>
            {
                width && width > 960 ? (
                    <MenuList className={classes.menuContainer}>
                        <MenuOption link='/home'          tooltip='Home'          text='Home'          active={activeItem === 'home'}          icon={homeIcon} />
                        <MenuOption link='/explore'       tooltip='Explore'       text='Explore'       active={activeItem === 'explore'}       icon={exploreIcon} />
                        <MenuOption link='/notifications' tooltip='Notifications' text='Notifications' active={activeItem === 'notifications'} icon={notificationsIcon} />
                        <MenuOption link='/messages'      tooltip='Messages'      text='Messages'      active={activeItem === 'messages'}      icon={emailIcon} />
                        <MenuOption link='/profile'       tooltip='Profile'       text='Profile'       active={activeItem === 'profile'}       icon={profileIcon} />
                        <MenuOption link='/settings'      tooltip='Settings'      text='Settings'      active={activeItem === 'settings'}      icon={settingsIcon} />
                    </MenuList>
                ) : width && width > 450 ?
                (
                    <MenuList className={classes.menuContainer}>
                        <MenuOption link='/home'           tooltip='Home'          text='' active={activeItem === 'home'}          icon={homeIcon} />
                        <MenuOption link='/explore'        tooltip='Explore'       text='' active={activeItem === 'explore'}       icon={exploreIcon} />
                        <MenuOption link='/notifications'  tooltip='Notifications' text='' active={activeItem === 'notifications'} icon={notificationsIcon} />
                        <MenuOption link='/messages'       tooltip='Messages'      text='' active={activeItem === 'messages'}      icon={emailIcon} />
                        <MenuOption link='/profile'        tooltip='Profile'       text='' active={activeItem === 'profile'}       icon={profileIcon} />
                        <MenuOption link='/settings'       tooltip='Settings'      text='' active={activeItem === 'settings'}      icon={settingsIcon} />
                    </MenuList>
                ) : (
                    <Grid className={classes.bottomMenuContainer} container direction='row'>
                        <BottomNavigation className={classes.bottomNavbar}>
                            <BottomNavigationAction label='' icon={homeIcon} onClick={() => history.push('/home')}/>
                            <BottomNavigationAction label='' icon={exploreIcon} onClick={() => history.push('/explore')} />
                            <BottomNavigationAction label='' icon={notificationsIcon} onClick={() => history.push('/notifications')} />

                            <SpeedDial
                                open={speedDialOpen}
                                hidden={false}
                                onClick={() => setSpeedDialOpen(!speedDialOpen)}
                                icon={moreIcon}
                                direction='up'
                                ariaLabel={'options'}
                                FabProps={{ style: {
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        boxShadow: 'none',
                                }}}
                            >
                                <SpeedDialAction icon={emailIcon} onClick={() => history.push('/messages')} />
                                <SpeedDialAction icon={settingsIcon} onClick={() => history.push('/settings')} />
                            </SpeedDial>
                        </BottomNavigation>
                    </Grid>
                )

            }
        </>
    )
}

export default withRouter(Menu);
