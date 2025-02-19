import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

// A custom theme for this app
const subtheme = createTheme({
  cssVariables: {
    cssVarPrefix: "sub",
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default subtheme;
