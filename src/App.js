import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import Popover from '@mui/material/Popover';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from './Navbar.js'


const drawerWidth = 240;

let iconss = [<SearchIcon />, <CottageOutlinedIcon />, <VideocamOutlinedIcon />, <EmailOutlinedIcon />]
let downIcons = [<CalendarTodayIcon />, <MessageOutlinedIcon />, <ContactPageOutlinedIcon />, <PermIdentityOutlinedIcon />]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  let isPopupopen = false;
  const handleClick = (event) => {
    if (isPopupopen) {
      handleClose();
      isPopupopen = false;
    }
    else {
      setAnchorEl(event.currentTarget);
      isPopupopen = true;
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openpopup = Boolean(anchorEl);
  const id = openpopup ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: 'white', color: 'black' }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton color="inherit" style={{ fontSize: '18px' }}><CalendarTodayIcon sx={{ fontSize: "medium", marginRight: '5px' }} /> Calendars </IconButton>
            <IconButton color="inherit" style={{ fontSize: '18px' }}><NotificationsIcon sx={{ fontSize: "medium", marginRight: '5px' }} />Notifications</IconButton>
          </div>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <span style={{ position: 'fixed', left: '20px' }}>
            <img style={{ marginTop: '5px', width: '28px', height: '28px' }} src='../logo.avif' /><span style={{ fontSize: '20px', position: 'fixed', top: '20px' }}>Bearish OS</span></span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Search Bearish OS', 'Dashboard', 'Videocalls', 'Inbox'].map((text, index) => (
            <ListItem key={text} className='hov' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {iconss[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                {index > 1 ? <ArrowForwardIosIcon sx={{ fontSize: 'medium' }} /> : ""}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Workspaces', 'Create a workspace'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <CheckCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                {index == 0 ? <KeyboardArrowDownIcon /> : ""}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{ marginTop: '80px' }}>
          {['Calendar', 'Messages', 'Contacts', 'Sharedwithme'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {downIcons[index]}
                  {/* {{if(index==2) <VideocamIcon/>;}} */}
                  { }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ marginBottom: '10px' }} />
          <span style={{ display: 'flex', justifyContent: 'space-between' }}>

            <HdrAutoIcon style={{ marginLeft: "10px" }} />

            <span><FiberNewIcon style={{ marginRight: "30px" }} />
              <SettingsIcon style={{ marginRight: "10px" }} />
            </span>
          </span>
        </List>


      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar />
        <DrawerHeader />
        <Typography>
          <Button className="btn3" aria-describedby={id} onClick={handleClick} variant="outlined"  ><OfflineBoltOutlinedIcon /></Button>
          <Popover
            id={id}
            open={openpopup}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Typography sx={{ p: 2 }}><ComputerOutlinedIcon sx={{ color: 'pink', fontSize: 'medium', marginRight: '5px' }} />Record Screen</Typography>
            <Typography sx={{ p: 2 }}><ContentCutOutlinedIcon sx={{ color: 'blue', fontSize: 'medium', marginRight: '5px' }} />Create Snippet</Typography>
            <Typography sx={{ p: 2 }}><ForumOutlinedIcon sx={{ color: 'black', fontSize: 'medium', marginRight: '5px' }} />Quick message</Typography>
            <Typography sx={{ p: 2, marginBottom: '25px' }}><WatchOutlinedIcon sx={{ color: 'green', fontSize: 'medium', marginRight: '5px' }} />Track time</Typography>
          </Popover>

        </Typography>
      </Box>
    </Box>
  );
}