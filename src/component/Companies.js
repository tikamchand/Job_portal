import React from "react";
import Grid from "@mui/material/Grid";
import Askimat from "../img/askimat.png";
import Make from "../img/make.png";
import Dorfus from "../img/dorfus.png";
import Greener from "../img/greener.png";
import Sass from "../img/sass.png";
import Coworks from "../img/coworks.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../App.css";

function Companies() {
  const companyImageStyle = {
    width: "100%",
    backgroundColor: "#2b3940",
  };
  let theme = createTheme({});
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor:"#2b3940"}}>
          <Container>
            <Typography
              variant="h6"
              color="white"
              pt={5}
              className="textCenter"
            >
              Get hired in top companies
            </Typography>
          </Container>
        </Box>
        <div style={companyImageStyle}>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              minHeight= "25vh"
              
            >
              <Grid item xs={12} sm={3} md={4} lg={2} m={2}>
                <img src={Make} alt="img" />
              </Grid>
              <Grid item xs={12} sm={3} md={4} lg={2} m={2}>
                <img src={Dorfus} alt="img" />
              </Grid>
              <Grid item xs={12} sm={3} md={4} lg={2} m={2}>
                <img src={Greener} alt="img" />
              </Grid>
              <Grid item xs={12} sm={3} md={4} lg={2} m={2}>
                <img src={Sass} alt="img" />
              </Grid>
              <Grid item xs={12} sm={3} md={4} lg={2} m={2}>
                <img src={Coworks} alt="img" />
              </Grid>
              <Grid item xs={12} sm={3} md={4} lg={2} m={2}>
                <img src={Askimat} alt="img" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Companies;
