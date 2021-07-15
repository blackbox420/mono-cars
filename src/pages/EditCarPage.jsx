import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import { StoresContext } from "../common/AppContext";
import { observer } from "mobx-react";
import EditCarForm from "../components/EditCarForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));
const EditCarPage = observer(() => {
  const { carsStore } = React.useContext(StoresContext);
  const { key: carId } = useParams();
  React.useEffect(() => {
    carsStore.getDetails(carId);
  }, [carId, carsStore]);
  const classes = useStyles();
  const history = useHistory();

  const onFinish = (values) => {
    console.log(`values`, values);
    carsStore.update(carId, values);
    history.push("/cars");
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Edit car</Typography>
      <Paper className={classes.paper}>
        <EditCarForm
          oldValues={{ ...carsStore.carDetails }}
          onFinish={onFinish}
          returnPath="/cars"
        />
      </Paper>
    </Container>
  );
});

export default EditCarPage;
