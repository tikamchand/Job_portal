import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { responsiveFontSizes } from "@mui/material/styles";
import Logo from "../img/logo.png";
import DrawerMenu from "./DrawerMenu";

export default function Navbar() {
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
  const [value, setValue] = useState(0);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = ["Home", "Category", "Features"];
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#e4ece8", boxShadow: "none" }}
        >
          <Container>
            <Toolbar disableGutters>
              <Box>
                <img src={Logo} alt="logo" />
              </Box>
              {isMatch ? (
                <>
                  <DrawerMenu />
                </>
              ) : (
                <>
                  <Box sx={{ borderColor: "divider", margin: "auto" }}>
                    <Tabs
                      sx={{ color: "#2b3940" }}
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      indicatorColor="secondary"
                      centered
                      textColor="secondary"
                    >
                      {PAGES.map((page, index) => {
                        return (
                        <Tab key={index} label={page} 
                         />)
                      })}
                    </Tabs>
                  </Box>
                </>
              )}

              <Box>
                <Button variant="text" sx={{ mr: 2 }} color="secondary">
                  Login
                </Button>
                <Button variant="contained" color="secondary">
                  Signup
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
