import React from "react";
import { Title } from "react-admin";
import { Box, Typography } from "@material-ui/core";

const Profile = (props) => (
  // TODO finish Profile Section
  <Box display="flex" flexDirection="row">
    <Title title="My Profile" />
    <Box mr={3} mt={3} display="flex" flexDirection="columns">
      <Typography variant="h5" gutterBottom>
        My Profile - Settings
      </Typography>
    </Box>
  </Box>
);
export default Profile;
