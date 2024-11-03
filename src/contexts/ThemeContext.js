import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#032541",
      },
      secondary: {
        main: "#1ed5a9",
      },
    },
    typography: {
      fontFamily: ['"Source Sans 3"', "sans-serif"].join(","),
      fontSize: 16,
      button: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: 16,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            body: {
              fontFamily: ['"Source Sans 3"', "sans-serif"].join(","),
              fontSize: 16,
            },
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
