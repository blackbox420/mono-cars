import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    minHeight: "100vh",
    padding: theme.spacing(5),
  },
  appBarSpacer: theme.mixins.toolbar,
}));
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md">{children}</Container>
      </div>
      <Footer />
    </div>
  );
}
