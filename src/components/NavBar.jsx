import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import { createTheme, IconButton } from "@mui/material";
import logo from "../assets/icons/logo_fafafa.svg"

export default function NavBar() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2877ee",
      },
      secondary: {
        main: "#fafafa",
      }
    }
  })

  const linkStyle = {
    textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '1.5em', transition: '100ms'
  }

  const { logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#252734 " }} elevation={2}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          
          <Box className="navlinks" sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" width="30em"/>
              </IconButton>
            </Link>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/products" style={linkStyle}>Products</Link>
            <Link to="/about" style={linkStyle}>About us</Link>
          </Box>
          <Box className="navlinks">
            { 
              localStorage.getItem('email') ? 
              <>
                <Link style={linkStyle}>{localStorage.getItem('email')}</Link>
                <Link to="/" style={linkStyle} onClick={logout}>Logout</Link>
              </> :
              <>
                <Link to="/login" style={linkStyle}>Login</Link>
                <Link to="/register" style={linkStyle}>Register</Link>
              </>
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
