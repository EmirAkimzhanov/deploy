import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";

export default function NavBar() {

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
