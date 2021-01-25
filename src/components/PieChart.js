import React from "react";
import { getStats } from "../providers/FetchStats";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography } from "@material-ui/core";

const pieTheme = {
  labels: {
    text: {
      fontSize: 14,
    },
  },
};

export default class PieChart extends React.Component {
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
      getStats("/stats/hours", user, from, to)
        .then((res) => {
          this.setState({ loading: false });
          this.setState({ ...this.state, data: res });
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
        width="50%"
        height={this.props.height}
        justifyContent="center"
        alignItems="center"
      >
        <ResponsivePie
          data={this.state.data}
          margin={{ top: 40, bottom: 40 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          theme={pieTheme}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
        />
        {this.state.data.length !== 0 ? (
          <Typography variant="h7">{this.props.title}</Typography>
        ) : null}
      </Box>
    );
  }
}
