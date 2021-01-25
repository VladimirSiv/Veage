import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// TODO Refactor this

const InfoCard = ({ classes, text, icon, label }) => (
  <Box>
    <Paper className={classes.paper}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" alignItems="center" flexWrap="wrap">
          {icon}
          <Typography style={{ marginLeft: 9 }}>{label}</Typography>
        </Box>
        <Typography style={{ color: "black" }}>{text}</Typography>
      </Box>
    </Paper>
  </Box>
);

export default InfoCard;
