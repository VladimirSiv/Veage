import React from "react";
import { Title } from "react-admin";
import { Box, Typography } from "@material-ui/core";
import UserSection from "./UserSection";
import GlobalSection from "./GlobalSection";

export default class Stats extends React.Component {
  render() {
    return (
      <Box mt={1} display="flex" flexDirection="column">
        <Title title="Stats" />
        <GlobalSection />
        <Typography variant="h5">User</Typography>
        <UserSection />
      </Box>
    );
  }
}
