import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HeroMan from "../img/hero-man.png";
import HeroPattern from "../img/hero-pattern.png";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "../App.css";

function HomePage() {
  const backgroundStyles = {
    width: "100%",
    height: "85vh",
    backgroundColor: "#e4ece8",
  };
  const patternStyles = {
    position: "absolute",
    right: "2%",
    opacity: "0.4",
    height: "85%",
    // display: "block"
  };
  const imageStyle = {
    position: "absolute",
    // bottom: "8%",
    zIndex: "2",
  };

  let theme = createTheme({
    palette: {
      secondary: {
        main: "#00b074",
        contrastText: "#ffffff",
      },
    },
  });
  theme = createTheme(theme, {
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: {
            [theme.breakpoints.up("lg")]: {
              maxWidth: "1280px",
            },

            // Note that you can customize other properties here, like padding, color, .etc.
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={backgroundStyles}
      >
        <ThemeProvider theme={theme}>
          <Container width="lg">
            <Grid item xs={12} sm={6} md={6} className="textCenter">
              <Typography
                component="div"
                variant="h1"
                sx={{ color: "#2b3940", fontWeight: "bold" }}
              >
                Find the perfect job that you deserve.
              </Typography>
            </Grid>
          </Container>
          <Box display={{ xs: "none", sm: "flex" }}>
            <img
              src={HeroMan}
              className="heroImage"
              alt="img"
              style={imageStyle}
            />
          </Box>

          <img src={HeroPattern} alt="img" style={patternStyles} />
          <Box className="btnStyle">
            <Button variant="contained" color="secondary" size="large">
              Search Jobs
            </Button>
          </Box>
        </ThemeProvider>
      </Grid>
    </>
  );
}

export default HomePage;
