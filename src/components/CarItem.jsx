import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  },
  actions: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
}));

export default function RecipeReviewCard({
  imgURL,
  brand,
  model,
  onDelete,
  onDetails,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imgURL} title={model} />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="p" color="secondary">
          {model}
        </Typography>
        <Typography variant="body1" color="primary" component="p">
          {brand}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={onDelete}>
          Delete
        </Button>
        <Button size="small" onClick={onDetails}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
