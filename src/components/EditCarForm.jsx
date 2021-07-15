import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
export default function EditCarForm({ onFinish, returnPath, oldValues }) {
  const [values, setValues] = React.useState({
    brand: "",
    imgURL: "",
    model: "",
    info: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    setValues(oldValues);
  }, [oldValues]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          onChange={handleChange}
          required
          name="brand"
          label="Brand"
          fullWidth
          variant="outlined"
          value={values.brand}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={handleChange}
          required
          name="model"
          label="Model"
          fullWidth
          variant="outlined"
          value={values.model}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={handleChange}
          required
          name="imgURL"
          value={values.imgURL}
          label="image URL"
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={handleChange}
          required
          name="info"
          value={values.info}
          label="Info"
          fullWidth
          multiline
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => onFinish(values)}
          variant="contained"
          color="primary"
          fullWidth
        >
          Save Changes
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Link component={RouterLink} to={returnPath}>
          <Button variant="contained" color="secondary" fullWidth>
            Return to cars
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
