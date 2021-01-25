import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

// TODO Fix - Remove dummy data

const DashboardCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          src="https://picsum.photos/200/300"
          title="Dummy Data"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DummyData
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            xt ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has surviv
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DashboardCard;
