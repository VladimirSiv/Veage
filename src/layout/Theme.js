import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    secondary: { main: "#5f997c" },
  },
  overrides: {
    MuiTableRow: {
      head: {
        "& > th ": {
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#5f997c80",
        },
      },
    },
  },
});

export default Theme;
