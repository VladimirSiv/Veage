import React from "react";
import { LineChart, BarChart } from "../../components";
import { Paper, Box } from "@material-ui/core";
import GlobalUpperSection from "./GlobalUpperSection";

const GlobalSection = (props) => {
  return (
    <Box display="flex" flexDirection="column">
      <GlobalUpperSection />
      <Box padding={3}>
        <Paper>
          <LineChart />
        </Paper>
      </Box>
      <Box padding={3}>
        <Paper>
          <BarChart />
        </Paper>
      </Box>
    </Box>
  );
};

export default GlobalSection;
