import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import NewCarForm from "../components/NewCarForm";
import { useHistory } from "react-router-dom";
import { StoresContext } from "../common/AppContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));
export default function NewCarPage() {
  const { carsStore } = React.useContext(StoresContext);

  const classes = useStyles();
  const history = useHistory();
  const onFinish = (values) => {
    carsStore.add(values);
    history.push("/cars");
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Add new car</Typography>
      <Paper className={classes.paper}>
        <NewCarForm onFinish={onFinish} returnPath="/cars" />
      </Paper>
    </Container>
  );
}
