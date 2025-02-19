import { alpha, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const blue = {
  50: "hsl(210, 100%, 96%)",
  100: "hsl(210, 100%, 90%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 70%)",
  400: "hsl(210, 100%, 60%)",
  main: "hsl(210, 100%, 45%)",
  500: "hsl(210, 100%, 45%)",
  600: "hsl(210, 100%, 42%)",
  700: "hsl(210, 100%, 38%)",
  800: "hsl(210, 100%, 30%)",
  900: "hsl(210, 100%, 23%)",
};

// A custom theme for this app
const brandingTheme = createTheme({
  cssVariables: {
    cssVarPrefix: "brand",
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      ...blue,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme: t }) => ({
          transition: "all 100ms ease-in",
          "&:focus-visible": {
            outline: `3px solid ${alpha(t.palette.primary.main, 0.5)}`,
            outlineOffset: 2,
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
              textShadow: `0 1px 1px ${alpha(theme.palette.common.black, 0.6)}`,
              backgroundColor: (theme.vars || theme).palette.primary[500],
              backgroundImage: "transparent",
              border: "1px solid ",
              borderColor: (theme.vars || theme).palette.primary[600],
              boxShadow: `${alpha(
                theme.palette.primary[400],
                0.5
              )} 0 1px 0 inset, ${alpha(
                theme.palette.primary[800],
                0.4
              )} 0 -1px 0 1px inset, ${alpha(
                theme.palette.common.black,
                0.1
              )} 0 2px 4px 0`,
              "&:hover": {
                backgroundColor: (theme.vars || theme).palette.primary[700],
                borderColor: (theme.vars || theme).palette.primary[800],
              },
              "&:active": {
                backgroundColor: (theme.vars || theme).palette.primary[800],
                borderColor: (theme.vars || theme).palette.primary[600],
                boxShadow: `${alpha(
                  theme.palette.primary[900],
                  0.7
                )} 0 1px 0 1px inset`,
              },
              "&.Mui-disabled": {
                color: theme.palette.grey[700],
                textShadow: "none",
                borderColor: theme.palette.grey[400],
              },
            }),
        }),
      },
    },
  },
});

export default brandingTheme;
