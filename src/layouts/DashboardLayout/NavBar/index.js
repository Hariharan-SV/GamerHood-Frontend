import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  Person as UserIcon,
  SportsEsports as GameIcon
} from '@material-ui/icons';
import NavItem from './NavItem';
import {getUser} from '../../../services/user';

const user = {
  avatar: '/static/images/avatars/avatar_12.png',
  jobTitle: 'Gamer',
};

const items = [
  {
    href: '/user/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/game',
    icon: GameIcon,
    title: 'Explore'
  },
  {
    href: '/user/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/user/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = (props) => {
  const { onMobileClose, openMobile } = props;
  const classes = useStyles();
  const location = useLocation();
  const [mail,setMail] = React.useState("");

  useEffect(() => {
    async function setMailValues(){
      var temp = await getUser();
      setMail(temp['userDetails']?temp['userDetails']['email']:"");
    }
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    setMailValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/user/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {mail}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
