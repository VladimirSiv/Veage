import React from "react";
import { RichTextField, Show } from "react-admin";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

import TextFieldsIcon from "@material-ui/icons/TextFields";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import TodayIcon from "@material-ui/icons/Today";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CategoryIcon from "@material-ui/icons/Category";

import { InfoCard } from "../../components";

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

const ActivityShow = (props) => (
  <Show {...props} title="Activity Details">
    <ShowSection classes={props.classes} />
  </Show>
);

const ShowSection = ({ classes, record }) => {
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
          text={record.title}
          label="Title"
          icon={<TextFieldsIcon className={classes.icon} />}
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
          text={record.Project.name}
          label="Project"
          icon={<AccountTreeIcon className={classes.icon} />}
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
          label="Type"
          text={record.Type.name}
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
    </Grid>
  );
};

export default withStyles(styles)(ActivityShow);
