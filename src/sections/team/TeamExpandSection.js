import React from "react";
import { RichTextField } from "react-admin";
import { get } from "../../providers/Fetch";
import { Grid, Box, Typography } from "@material-ui/core";
import { TeamMemberCard } from "../../components";

// TODO Refactor/Finish

class TeamExpandSection extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    get(`/teams/${this.props.id}`).then((team) => {
      this.setState({ data: team });
    });
  }
  render() {
    return (
      <Box padding={2}>
        <Typography variant="h5">Description</Typography>
        <Box padding={2}>
          {this.state.data && (
            <RichTextField record={this.state.data} source="description" />
          )}
        </Box>
        <Typography variant="h5">Members</Typography>
        <Box padding={2}>
          <Grid container justify="center" alignItems="center" spacing={10}>
            {this.state.data &&
              this.state.data.Users.map((user) => {
                return (
                  <Grid item xs={3} alignItems="center" justify="center">
                    <TeamMemberCard user={user} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default TeamExpandSection;
