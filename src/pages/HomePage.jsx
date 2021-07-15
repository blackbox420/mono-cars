import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import CarItem from "../components/CarItem";
import AddIcon from "@material-ui/icons/Add";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { StoresContext } from "../common/AppContext";
import { observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ClearButton from "@material-ui/icons/Clear";
import { CircularProgress } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  tools: {
    marginBottom: theme.spacing(4),
  },
  loader: {
    display: "flex",
    justifyContent: "center",
  },
}));

const HomePage = observer(() => {
  const classes = useStyles();
  const { carsStore } = useContext(StoresContext);
  const history = useHistory();
  const [filter, setFilter] = React.useState("");

  const handleDelete = (key) => {
    carsStore.delete(key);
  };
  const handleDetails = (key) => {
    history.push("/cars/" + key);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    carsStore.filterCars(e.target.value);
  };
  const clearFilter = () => {
    setFilter("");
    carsStore.filterCars("");
  };
  const handleSort = () => {
    carsStore.sortCars();
  };
  const handlePage = (e, p) => {
    carsStore.changePage(p);
  };
  return (
    <>
      {/* Actions Buttons  */}
      <Grid
        container
        justifyContent="space-between"
        spacing={3}
        alignItems="center"
        className={classes.tools}
      >
        <Grid item>
          <Button color="secondary" onClick={handleSort}>
            Sort by model (A-Z)
          </Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Filter by brand"
            value={filter}
            onChange={handleFilter}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={clearFilter}>
                    <ClearButton />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/cars/add">
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Add
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Items List  */}
      <Grid container spacing={4}>
        {carsStore.isLoading ? (
          <Grid item xs={12} className={classes.loader}>
            <CircularProgress />
          </Grid>
        ) : (
          carsStore.getCarsByPage().map((car) => (
            <Grid item key={car.key} xs={12} sm={6} md={3}>
              <CarItem
                model={car.model}
                imgURL={car.imgURL}
                brand={car.brand}
                onDelete={() => handleDelete(car.key)}
                onDetails={() => handleDetails(car.key)}
              />
            </Grid>
          ))
        )}
      </Grid>

      {/* Paginator */}
      <br />
      <br />
      <Grid container justifyContent="center" spacing={4}>
        <Pagination
          color="primary"
          onChange={handlePage}
          count={carsStore.pageCount}
          page={carsStore.currentPage}
        />
      </Grid>
    </>
  );
});

export default HomePage;
