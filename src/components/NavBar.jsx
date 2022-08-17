import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";


export default function NavBar() {


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

      <AppBar position="static" sx={{ backgroundColor: "#252734 " }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <label className="switch">
              <input type="checkbox" onClick={console.log("emir")} />
              <span
                className="slider"
                style={{
                  color: "black",
                  fontSize: "2.2vmin",
                  fontFamily: " 'Montserrat', sans-serif",
                }}
              >
                Delivery{" "}
                <span
                  style={{
                    color: "white",
                    fontSize: "2.2vmin",
                    fontFamily: " 'Montserrat', sans-serif",
                    margin: "auto ",
                  }}
                >
                  Pickup
                </span>
              </span>
            </label>
            <span
              style={{
                paddingLeft: "5%",
                fontFamily: " 'Montserrat', sans-serif",
                fontSize: "2vmin",
              }}
            >
              select the delivery adress
            </span>
            <span
              style={{
                fontSize: "2vmin",
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              nearest delivery
            </span>
          </Typography>
          { 
            localStorage.getItem('email') ? 
            <>
              <Button color="inherit" sx={{ textTransform: 'none' }}>{localStorage.getItem('email')}</Button>
              <Link to="/">
                <Button color="inherit" sx={{ textTransform: 'none' }} onClick={logout}>Logout</Button>
              </Link>
            </> :
            <>
              <Link to="/login">
                <Button color="inherit" sx={{ textTransform: 'none' }}>Login</Button>
              </Link>
              <Link to="/register">
                <Button color="inherit" sx={{ textTransform: 'none' }}>Register</Button>
              </Link>
            </>
          }

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
