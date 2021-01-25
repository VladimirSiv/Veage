import React from "react";
import { Show, RichTextField } from "react-admin";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../../components";
import { withStyles } from "@material-ui/styles";

import TextFieldsIcon from "@material-ui/icons/TextFields";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import TodayIcon from "@material-ui/icons/Today";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CategoryIcon from "@material-ui/icons/Category";
import FaceIcon from "@material-ui/icons/Face";

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
    spacing: 3,
    padding: 26,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icon: {
    fill: theme.palette.text.secondary,
  },
  description_paper: { padding: 20 },
  description_text: { color: theme.palette.text.primary },
});

const OverviewShow = (props) => (
  <Show title="Activity" {...props}>
    <OverviewSection classes={props.classes} />
  </Show>
);

const OverviewSection = ({ classes, record }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          text={record.User.username}
          label="Username"
          icon={<FaceIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          text={record.title}
          label="Title"
          icon={<TextFieldsIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          text={record.Project.name}
          label="Project"
          icon={<AccountTreeIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          text={record.hours}
          label="Hours"
          icon={<QueryBuilderIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          label="Date"
          text={new Date(record.createdAt).toDateString()}
          icon={<TodayIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          text={record.Type.name}
          label="Type"
          icon={<CategoryIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={12}>
        <h1>Description:</h1>
        <Paper className={classes.description_paper}>
          <RichTextField
            record={record}
            source="description"
            className={classes.description_text}
          />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          label="Created At"
          text={new Date(record.createdAt).toDateString()}
          icon={<TodayIcon className={classes.icon} />}
        />
      </Grid>
      <Grid item xs={2}>
        <InfoCard
          classes={classes}
          label="Updated At"
          text={new Date(record.updatedAt).toDateString()}
          icon={<TodayIcon className={classes.icon} />}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(OverviewShow);
