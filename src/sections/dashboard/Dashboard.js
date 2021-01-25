import React from "react";
import { Title } from "react-admin";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardCard from "./DashboardCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    elevation: 2,
    padding: theme.spacing(2),
  },
}));

// TODO Customize Dashboard
// For now use only dummy data

const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Title title="Dashboard" />
      <Grid item xs={12}>
        <Box display="flex" flexDirection="row">
          <Box mr={3} mb={3} display="flex" flexDirection="columns">
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Welcome {localStorage.getItem("username")}!
              </Typography>
              <Typography variant="h4" gutterBottom>
                Daily Message
              </Typography>
              <p style={{ width: "800px" }}>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                also the leap into electroni opularised in the 1960s with the
                release of Letraset shee
              </p>
              <img src="https://picsum.photos/800/300" alt="" />
            </Paper>
          </Box>
          <Box mb={3} display="flex" flexDirection="columns">
            <Paper className={classes.paper}>
              <Typography variant="h8" gutterBottom>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classica l
                Latin literature from 45 BC, making i t over 2000 years old.
                Richard McClinto k, a Latin professor at Hampden-Sydney College
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="center"
        >
          <Box mr={3} display="flex">
            <DashboardCard />
          </Box>
          <Box mr={3} display="flex">
            <DashboardCard />
          </Box>
          <Box mr={3} display="flex">
            <DashboardCard />
          </Box>
          <Box mr={3} display="flex">
            <DashboardCard />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
