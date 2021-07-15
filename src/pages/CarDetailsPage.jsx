import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link as RouterLink } from "react-router-dom";
import { StoresContext } from "../common/AppContext";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 300,
  },
}));
const CarDetailsPage = observer(() => {
  const { carsStore } = React.useContext(StoresContext);
  const { key: carId } = useParams();
  React.useEffect(() => {
    carsStore.getDetails(carId);
  }, [carId, carsStore]);

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      {carsStore.carDetails && (
        <>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={classes.tools}
          >
            <Link component={RouterLink} to="/cars">
              <Button
                variant="outlined"
                color="secondary"
                //   startIcon={<AddIcon />}
              >
                Return to cars list
              </Button>
            </Link>
            <Link component={RouterLink} to={`/cars/${carId}/edit`}>
              <Button
                variant="contained"
                color="primary"
                //   startIcon={<AddIcon />}
              >
                Edit
              </Button>
            </Link>
          </Grid>
          <Paper className={classes.paper}>
            <Typography variant="h5">{carsStore.carDetails.brand}</Typography>
            <Typography variant="body1" color="secondary">
              {carsStore.carDetails.model}
            </Typography>
            <img
              className={classes.image}
              alt=""
              src={carsStore.carDetails.imgURL}
            />
            <Typography variant="body2">{carsStore.carDetails.info}</Typography>
          </Paper>
        </>
      )}
    </Container>
  );
});

export default CarDetailsPage;
