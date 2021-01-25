import React from "react";
import { Loading, Error } from "react-admin";
import { get } from "../providers/Fetch";
import { Box } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";

export default class LineChart extends React.Component {
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
    get("/stats/project-activity")
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
            <ResponsiveLine
              data={this.state.data}
              margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -50,
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </Box>
        )}
      </div>
    );
  }
}
