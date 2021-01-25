import React from "react";
import { Loading, Error } from "react-admin";
import { get } from "../../providers/Fetch";
import { Box, TextField, Paper } from "@material-ui/core";
import { SelectForm, PieChart, CalendarChart } from "../../components";

export default class UserSection extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      hasError: false,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    get("/users/all")
      .then((data) => {
        this.setState({ loading: false });
        this.setState({ ...this.state, users: data });
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.setState({ hasError: true });
      });
  }

  handleUserChange = (newUser) => {
    this.setState({ user: newUser });
  };

  handleDateChange = (event) => {
    if (event.target.id === "dateFrom") {
      this.setState({ from: event.target.valueAsDate });
    } else {
      this.setState({ to: event.target.valueAsDate });
    }
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : this.state.hasError ? (
          <Error />
        ) : (
          <Box padding={3}>
            <Paper>
              <Box padding={3} display="flex" flexDirection="row">
                <Box display="flex" flexDirection="column">
                  <Box mb={5}>
                    <SelectForm
                      choices={users}
                      value={this.state.user}
                      text="username"
                      label="User"
                      handleChange={this.handleUserChange}
                    />
                  </Box>
                  <Box mb={5}>
                    <TextField
                      id="dateFrom"
                      label="From"
                      type="date"
                      size="small"
                      onChange={this.handleDateChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="dateTo"
                      label="To"
                      type="date"
                      onChange={this.handleDateChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  width="100%"
                  height={400}
                  flexDirection="row"
                >
                  <PieChart
                    title={"Hours per project"}
                    height={350}
                    user={this.state.user}
                    from={this.state.from}
                    to={this.state.to}
                  />
                  <CalendarChart
                    title={"Activity Calendar"}
                    height={350}
                    user={this.state.user}
                    from={this.state.from}
                    to={this.state.to}
                  />
                </Box>
              </Box>
            </Paper>
          </Box>
        )}
      </div>
    );
  }
}
