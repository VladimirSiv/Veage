import React from "react";
import { Loading, Error } from "react-admin";
import { get } from "../../providers/Fetch";
import { Box, withStyles } from "@material-ui/core";
import { GlobalStatCard } from "../../components";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import FaceIcon from "@material-ui/icons/Face";
import ScheduleIcon from "@material-ui/icons/Schedule";
import RestoreIcon from "@material-ui/icons/Restore";
import BlockIcon from "@material-ui/icons/Block";
import CloseIcon from "@material-ui/icons/Close";
import Theme from "../../layout/Theme";

const styles = (theme) => ({
  icon: {
    fill: theme.palette.text.secondary,
  },
});

class GlobalUpperSection extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      hasError: false,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    get("/stats/global")
      .then((res) => {
        this.setState({ loading: false });
        this.setState({ ...this.state, data: res });
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.setState({ hasError: true });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : this.state.hasError ? (
          <Error />
        ) : (
          <Box
            padding={3}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <GlobalStatCard
              icon={<AccountTreeIcon className={classes.icon} />}
              text="Active projects"
              color={Theme.palette.secondary.main}
              value={this.state.data.activeProjects}
            />
            <GlobalStatCard
              icon={<FaceIcon className={classes.icon} />}
              text="Active users"
              color={Theme.palette.secondary.main}
              value={this.state.data.activeUsers}
            />
            <GlobalStatCard
              icon={<ScheduleIcon className={classes.icon} />}
              text="Weekly hours"
              color={Theme.palette.secondary.main}
              value={this.state.data.weekHours}
            />
            <GlobalStatCard
              icon={<RestoreIcon className={classes.icon} />}
              text="Weekly activities"
              color={Theme.palette.secondary.main}
              value={this.state.data.weekActivities}
            />
            <GlobalStatCard
              icon={<BlockIcon className={classes.icon} />}
              text="Blocked Users"
              color={Theme.palette.secondary.main}
              value={this.state.data.disabledUsers}
            />
            <GlobalStatCard
              icon={<CloseIcon className={classes.icon} />}
              text="Disabled Projects"
              color={Theme.palette.secondary.main}
              value={this.state.data.disabledProjects}
            />
          </Box>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(GlobalUpperSection);
