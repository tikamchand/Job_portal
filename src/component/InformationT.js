import React from "react";
import CardImage from "../img/card-img2.png";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../App.css"
function InformationT() {
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
      <ThemeProvider theme={theme}>
        <Container bgcolor="#fbfbfb">
          <Grid container my={10}>
            <Grid item xs={12} md={12} lg={6} className="infoCard">
              <img src={CardImage} alt="Card" className="cardImg"></img>

            </Grid>
            <Grid item xs={12} md={12} lg={6} p={8}>
              <Typography
                variant="h2"
                color="#2b3940"
                sx={{ fontWeight: "bold" }}
              >
                Get applications from the world best talents.
              </Typography>
              <Typography
                variant="h6"
                color="#797e7d"
                my={2}
                sx={{ fontWeight: "200" }}
              >
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps.
              </Typography>
              <Button color="secondary" variant="contained" size="large">
                Post a Job
              </Button>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default InformationT;
