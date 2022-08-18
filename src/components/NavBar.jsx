import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import { createTheme, IconButton, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from "../assets/icons/logo_fafafa.svg";

export default function NavBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2877ee",
      },
      secondary: {
        main: "#fafafa",
      },
    },
  });

  const linkStyle = {
    textDecoration: "none",
    fontSize: '1em',
    color: "inherit",
    cursor: "pointer",
    padding: "1.5em",
    transition: "100ms",
  };

  const { logout, user } = useAuth();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#252734 " }}
        elevation={2}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar"
        >
          <Box
            className="navlinks"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" width="30em" />
              </IconButton>
            </Link>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/products" style={linkStyle}>
              Products
            </Link>
            <Link to="/about" style={linkStyle}>
              About us
            </Link>
            {
              user.admin ? (
              <>
                <Link to="/admin" style={linkStyle}>
                  Admin
                </Link>
              </>
              ):
              (<></>)
            }
          </Box>
          <Box className="navlinks">
            {localStorage.getItem("user") ? (
              <>
                <Link to="/" style={linkStyle}>
                  {JSON.parse(localStorage.getItem("user")).email}
                </Link>
                <Link to="/" style={linkStyle} onClick={logout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" style={linkStyle}>
                  Login
                </Link>
                <Link to="/register" style={linkStyle}>
                  Register
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar-burger"
        >
          <Box
            className="navlinks"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('left', true)}
            >
              <img src={logo} alt="logo" width="30em" />
            </IconButton>
            <Box className="burger">
                  
              <React.Fragment key="left">
                <SwipeableDrawer
                  anchor='left'
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                  onOpen={toggleDrawer('left', true)}
                >
                  {list('left')}
                </SwipeableDrawer>
              </React.Fragment>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
