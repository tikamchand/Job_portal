import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WorkIcon from "@mui/icons-material/Work";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LayersIcon from "@mui/icons-material/Layers";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SendIcon from "@mui/icons-material/Send";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import PersonIcon from "@mui/icons-material/Person";
import {responsiveFontSizes} from "@mui/material/styles";
import "../../App.css";
function Category(props) {
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
  const WorkIconWrapper = styled(WorkIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#4743db",
    height: "30px",
    width: "30px",
    backgroundColor: "#ededfb",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const CustomerIconWrapper = styled(SupportAgentIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#65efe3",
    height: "30px",
    width: "30px",
    backgroundColor: "#effdfc",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const DevelopmentIconWrapper = styled(LayersIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#fa8557",
    height: "30px",
    width: "30px",
    backgroundColor: "#fef3ee",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const DesignIconWrapper = styled(BorderColorIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#f71e3f",
    height: "30px",
    width: "30px",
    backgroundColor: "#fee8eb",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const MarketingIconWrapper = styled(RocketLaunchIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#fa5f1c",
    height: "30px",
    width: "30px",
    backgroundColor: "#feefe8",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const SalesIconWrapper = styled(SendIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#ffb300",
    height: "30px",
    width: "30px",
    backgroundColor: "#fff7e5",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const ProjectIconWrapper = styled(ViewSidebarIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#69d7e5",
    height: "30px",
    width: "30px",
    backgroundColor: "#edfbfc",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  const HumanIconWrapper = styled(PersonIcon)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    fill: "#00b074",
    height: "30px",
    width: "30px",
    backgroundColor: "#e5f7f1",
    borderRadius: "10%",
    margin: theme.spacing(2, 4),
  }));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            p={5}
            sx={{ color: "#2b3940", fontWeight: "bold" }}
            className= "textCenter"
            id= "category"
          >
            Explore With Category
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <WorkIconWrapper>
                  <WorkIcon fill="#00b074"/>
                </WorkIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Business Development
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    122 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <CustomerIconWrapper>
                  <supportAgentIcon />
                </CustomerIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Customer Services
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    267 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <DevelopmentIconWrapper>
                  <LayersIcon />
                </DevelopmentIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Development
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    352 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <DesignIconWrapper>
                  <BorderColorIcon />
                </DesignIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Design
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    122 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <MarketingIconWrapper>
                  <RocketLaunchIcon />
                </MarketingIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Marketing & Management
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    122 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <SalesIconWrapper>
                  <SendIcon />
                </SalesIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Sales & Communication
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    272 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <ProjectIconWrapper>
                  <ViewSidebarIcon />
                </ProjectIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Project Management
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    192 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  width: "275px",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                  },
                  cursor: "pointer",
                }}
              >
                <HumanIconWrapper>
                  <PersonIcon />
                </HumanIconWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Human Resources
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    92 vacancy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Category;
