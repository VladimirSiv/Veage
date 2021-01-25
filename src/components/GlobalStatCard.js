import { Paper, Box, Typography } from "@material-ui/core";

const GlobalStatCard = (props) => {
  return (
    <Box mr={5}>
      <Paper>
        <Box
          display="flex"
          flexDirection="column"
          padding={5}
          alignItems="center"
          justifyContent="center"
        >
          {props.icon}
          <Typography>{props.text}</Typography>
          <Typography variant="h4" style={{ color: props.color }}>
            {props.value}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default GlobalStatCard;
