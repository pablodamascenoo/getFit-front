import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    button: {
      fontSize: 15,
      fontWeight: 700,
    },
    fontFamily: ['"Figtree"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#285576",
    },
    secondary: {
      contrastText: "#285576",
      main: "#FFC74E",
    },
    text: {
      primary: "#285576",
      secondary: "#285576",
    },
  },
});
