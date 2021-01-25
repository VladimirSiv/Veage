import React from "react";
import { getStats } from "../providers/FetchStats";
import { ResponsiveCalendar } from "@nivo/calendar";
import { Box, Typography } from "@material-ui/core";

export default class CalendarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      hasError: false,
      loading: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.user !== prevProps.user ||
      this.props.from !== prevProps.from ||
      this.props.to !== prevProps.to
    ) {
      const user = this.props.user;
      const from = this.props.from;
      const to = this.props.to;
      this.setState({ loading: true });
      getStats("/stats/days", user, from, to)
        .then((res) => {
          this.setState({ loading: false });
          this.setState({
            ...this.state,
            data: res,
            from: res[res.length - 1].day,
            to: res[0].day,
          });
        })
        .catch((err) => {
          this.setState({ loading: false });
          this.setState({ hasError: true });
        });
    }
  }

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        height={this.props.height}
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <ResponsiveCalendar
          data={this.state.data}
          from={this.state.from}
          to={this.state.to}
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 40, bottom: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
        {this.state.data.length !== 0 ? (
          <Typography variant="h7">{this.props.title}</Typography>
        ) : null}
      </Box>
    );
  }
}
