import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Mono Cars
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Mono Cars
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        This project is for testing only
      </Typography>
      <Copyright />
    </div>
  );
}
