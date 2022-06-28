import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { responsiveFontSizes } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";

function PageF() {
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
        <footer style={{ backgroundColor: "#2b3940" }}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={3} color={"#ffffff"}>
                <Box borderBottom={1} pb={1}>Company</Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    About Us
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Contact Us
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Careers
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Press
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3} color={"#ffffff"}>
                <Box borderBottom={1} pb={1}>Product</Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Features
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Pricing
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    News
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Help desk
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Support
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3} color={"#ffffff"}>
                <Box borderBottom={1} pb={1}>Services</Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Digital Marketing
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    SEO for Business
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Dashboard
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    UI Design
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3} color={"#ffffff"}>
                <Box borderBottom={1} pb={1}>Legal</Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Privacy Policy
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Terms & Condition
                  </Link>
                </Box>
                <Box p={1}>
                  <Link href="#" color="inherit" underline="none">
                    Return Policy
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 3,}}
              pb={{ xs: 5, sm: 5 }}
              color={"#ffffff"}
            >
              Hiring Lab &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default PageF;
