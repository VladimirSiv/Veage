import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Loading, Error } from "react-admin";
import { Box } from "@material-ui/core";
import { get } from "../providers/Fetch";

export default class BarChart extends React.Component {
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
    get("/stats/project-type")
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
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : this.state.hasError ? (
          <Error />
        ) : (
          <Box height={400} display="flex" flexDirection="row">
            <ResponsiveBar
              data={this.state.data}
              keys={
                this.state.data.length !== 0 &&
                Object.keys(this.state.data[0]).filter(
                  (item) => item !== "project_name"
                )
              }
              indexBy="project_name"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "fries",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "sandwich",
                  },
                  id: "lines",
                },
              ]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Project",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </Box>
        )}
      </div>
    );
  }
}
