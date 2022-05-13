import React from "react";
import CardImage from "../img/card-img.jpg";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import Airbnb from "../img/airbnb-small.png";
import  Facebook  from "../img/facebook-small.png";
import  Uber from "../img/uber-small.png";
import Pepsi from "../img/pepsi.png";
import  GitHub from "../img/github.png";
import {responsiveFontSizes} from "@mui/material/styles";
import "../App.css";
function Information() {
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
theme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container my={10} spacing={2} minHeight={"80vh"} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} lg={6} className={"infoCard infoCardS"}>
              <img src={CardImage} alt="Card"></img>
              <Box sx={{ position: "relative"}}>
                <Card
                  sx={{
                    position: "absolute",
                    top: "-100px",
                    right: "0px",
                    overflow: "visible",
                    padding: "15px",
                    width: "250px",
                    height: "130px",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                  }}
                  
                >
                  <CheckCircleIcon
                    sx={{
                      position: "absolute",
                      top: "-50px",
                      left: "-35px",
                      fill: "#00b074",
                      height: "85px",
                      width: "85px",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6">Found 190+ Jobs</Typography>
                    <img src={Uber} alt="icons"/>
                    <img src={GitHub} alt="icons"/>
                    <img src={Pepsi} alt="icons"/>
                    <img src={Airbnb} alt="icons"/>
                    <img src={Facebook} alt="icons"/>
                    <Typography variant="subtitle1" color='text.secondary'>+14 Gaints</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                variant="h2"
                color="#2b3940"
                sx={{ fontWeight: "bold" }}
                pt={{xs:8, md:0}}
              >
                Help you to get the best job that fits you
              </Typography>
              <Typography
                variant="h6"
                color="#797e7d"
                mt={2}
                sx={{ fontWeight: "200" }}
              >
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approach
              </Typography>
              <Typography
                variant="h6"
                color="#2b3940"
                mt={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <DoneIcon
                  sx={{ fill: "#00b074", height: "35px", width: "35px" }}
                />
                Bring to the table win-win survival
              </Typography>
              <Typography
                variant="h6"
                color="#2b3940"
                my={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <DoneIcon
                  sx={{ fill: "#00b074", height: "35px", width: "35px" }}
                />
                Capitalize on low hanging fruit to identify
              </Typography>
              <Typography
                variant="h6"
                color="#2b3940"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <DoneIcon
                  sx={{ fill: "#00b074", height: "35px", width: "35px" }}
                />
                But I must explain to you how all this
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Information;
