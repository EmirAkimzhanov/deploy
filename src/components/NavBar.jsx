import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#071522 " }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button variant="contained" sx={{ backgroundColor: "#1C2833  " }}>
              Contained
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#1C2833  " }}>
              Contained
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
