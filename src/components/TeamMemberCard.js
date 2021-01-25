import { AvatarPreview } from ".";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    border: 0,
    borderRadius: 3,
    padding: 15,
  },
});

const TeamMemberCard = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <AvatarPreview
          record={props.user}
          src="UserDetail.image"
          style={{ height: "100px", width: "100px" }}
        />
        <Typography>
          {props.user.UserDetail.firstName}-{props.user.UserDetail.lastName}
        </Typography>
        <Typography variant="h7">{props.user.UserDetail.jobTitle}</Typography>
      </Box>
    </Paper>
  );
};

export default TeamMemberCard;
