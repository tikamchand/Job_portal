import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";
import Google from "../img/google.png";
import { responsiveFontSizes } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import WorkIcon from "@mui/icons-material/Work";
import Airbnb from "../img/airbnb.png";
import Shopify from "../img/shopee.png";
import Uber from "../img/uber.png";
import Facebook from "../img/facebook.png";
import Oculus from "../img/oculus.png"
import "../App.css";
function Featured() {
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
        <Box bgcolor={"#2b3940"} mb={5} minHeight="1000px" padding="135px 0 130px 0" justifyContent="center">
          <Container>
            <Typography
              variant="h3"
              mb={8}
              sx={{ color: "#ffffff", fontWeight: "bold" }}
              className="textCenter"
            >
              Featured Jobs
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <Card
                  sx={{ maxWidth: 360, padding: "20px", borderRadius: "10px" }}
                >
                  <img alt="google" src={Google} />
                  <CardContent>
                    <Typography variant="subtitle" color="text.secondary">
                      Google INC
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#2b3940"
                      fontWeight="700"
                    >
                      Product Designer
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <PinDropIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />{" "}
                        Mumbai
                      </Button>
                      <Button sx={{ color: "#fa5f1c", fontSize: "13px" }}>
                        <WorkIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        Full-Time
                      </Button>
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <CurrencyRupeeIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        40k-70k
                      </Button>
                    </ButtonGroup>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ wordBreak: "break-word" }}
                      mt={1}
                    >
                      We are looking for Enrollment Advisors who are looking to
                      take 30-35 appointments per week. All leads are
                      pre-scheduled
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="contained">
                      Apply For Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 360, padding: "20px", borderRadius: "10px" }}
                >
                  <img alt="google" src={Airbnb} />
                  <CardContent>
                    <Typography variant="subtitle" color="text.secondary">
                      UI/UX Designer
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#2b3940"
                      fontWeight="700"
                    >
                      Product Designer
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <PinDropIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />{" "}
                        Mumbai
                      </Button>
                      <Button sx={{ color: "#fa5f1c", fontSize: "13px" }}>
                        <WorkIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        Full-Time
                      </Button>
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <CurrencyRupeeIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        40k-70k
                      </Button>
                    </ButtonGroup>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ wordBreak: "break-word" }}
                      mt={1}
                    >
                      We are looking for Enrollment Advisors who are looking to
                      take 30-35 appointments per week. All leads are
                      pre-scheduled
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="contained">
                      Apply For Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 360, padding: "20px", borderRadius: "10px" }}
                >
                  <img alt="google" src={Shopify} />
                  <CardContent>
                    <Typography variant="subtitle" color="text.secondary">
                     ios developer
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#2b3940"
                      fontWeight="700"
                    >
                      Product Designer
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <PinDropIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />{" "}
                        Mumbai
                      </Button>
                      <Button sx={{ color: "#fa5f1c", fontSize: "13px" }}>
                        <WorkIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        Full-Time
                      </Button>
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <CurrencyRupeeIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        40k-70k
                      </Button>
                    </ButtonGroup>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ wordBreak: "break-word" }}
                      mt={1}
                    >
                      We are looking for Enrollment Advisors who are looking to
                      take 30-35 appointments per week. All leads are
                      pre-scheduled
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="contained">
                      Apply For Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 360, padding: "20px", borderRadius: "10px" }}
                >
                  <img alt="google" src={Uber} />
                  <CardContent>
                    <Typography variant="subtitle" color="text.secondary">
                      Creative Director
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#2b3940"
                      fontWeight="700"
                    >
                      Product Designer
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <PinDropIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />{" "}
                        Mumbai
                      </Button>
                      <Button sx={{ color: "#fa5f1c", fontSize: "13px" }}>
                        <WorkIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        Full-Time
                      </Button>
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <CurrencyRupeeIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        40k-70k
                      </Button>
                    </ButtonGroup>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ wordBreak: "break-word" }}
                      mt={1}
                    >
                      We are looking for Enrollment Advisors who are looking to
                      take 30-35 appointments per week. All leads are
                      pre-scheduled
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="contained">
                      Apply For Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 360, padding: "20px", borderRadius: "10px" }}
                >
                  <img alt="google" src={Facebook} />
                  <CardContent>
                    <Typography variant="subtitle" color="text.secondary">
                      Facebook
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#2b3940"
                      fontWeight="700"
                    >
                      Marketing Manager
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <PinDropIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />{" "}
                        Mumbai
                      </Button>
                      <Button sx={{ color: "#fa5f1c", fontSize: "13px" }}>
                        <WorkIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        Full-Time
                      </Button>
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <CurrencyRupeeIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        40k-70k
                      </Button>
                    </ButtonGroup>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ wordBreak: "break-word" }}
                      mt={1}
                    >
                      We are looking for Enrollment Advisors who are looking to
                      take 30-35 appointments per week. All leads are
                      pre-scheduled
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="contained">
                      Apply For Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 360, padding: "20px", borderRadius: "10px" }}
                >
                  <img alt="google" src={Oculus} />
                  <CardContent>
                    <Typography variant="subtitle" color="text.secondary">
                      Oculus
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#2b3940"
                      fontWeight="700"
                    >
                      Software Engineer
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <PinDropIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />{" "}
                        Mumbai
                      </Button>
                      <Button sx={{ color: "#fa5f1c", fontSize: "13px" }}>
                        <WorkIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        Full-Time
                      </Button>
                      <Button sx={{ color: "#1a5aeb", fontSize: "13px" }}>
                        <CurrencyRupeeIcon
                          sx={{ height: "18px", width: "18px", padding: "2px" }}
                        />
                        40k-70k
                      </Button>
                    </ButtonGroup>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ wordBreak: "break-word" }}
                      mt={1}
                    >
                      We are looking for Enrollment Advisors who are looking to
                      take 30-35 appointments per week. All leads are
                      pre-scheduled
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="contained">
                      Apply For Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Featured;
