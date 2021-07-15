import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Navigation() {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Mono Cars
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
