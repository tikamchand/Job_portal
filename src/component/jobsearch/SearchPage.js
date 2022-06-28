import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import JobCard from "./JobCard";
const jobDetails = [
  {
    position: "Web developer",
    department: "Development",
    location: "Mumbai",
    jobType: "Fresher",
    salary: "1,00,000-3,00,000",
    jobDesc:
      "If you are an engineer who's passionate about building impactful products that scale to tens of millions of page views a day, Indeed is looking for you. Indeed offers skilled developers like you a complex development ecosystem with short release cycles. Every week sees the new release of multiple products that meet the needs of jobseekers worldwide.",
    responsibility: [
      "Write software to fulfill well-specified, small-scoped work requests for your team's product(s), escalating more complex or ambiguous issues to senior engineers.",
      "Write software to fix simple bugs.",
      "Assist in investigating problems and recommending fixes for products within your team.",
      "Utilize knowledge of programming languages and the software ecosystem to accomplish goals.",
    ],
  },
  {
    position: "Backend developer",
    department: "Development",
    location: "Mumbai",
    jobType: "Fresher",
    salary: "7,00,000-8,00,000",
    jobDesc:
      "If you are an engineer who's passionate about building impactful products that scale to tens of millions of page views a day, Indeed is looking for you. Indeed offers skilled developers like you a complex development ecosystem with short release cycles. Every week sees the new release of multiple products that meet the needs of jobseekers worldwide.",
    responsibility: [
      "Write software to fulfill well-specified, small-scoped work requests for your team's product(s), escalating more complex or ambiguous issues to senior engineers.",
      "Write software to fix simple bugs.",
      "Assist in investigating problems and recommending fixes for products within your team.",
      "Utilize knowledge of programming languages and the software ecosystem to accomplish goals.",
    ],
  },
  {
    position: "UI/UX developer",
    department: "Development",
    location: "Thane",
    jobType: "Fresher",
    salary: "1,00,000-3,00,000",
    jobDesc:
      "If you are an engineer who's passionate about building impactful products that scale to tens of millions of page views a day, Indeed is looking for you. Indeed offers skilled developers like you a complex development ecosystem with short release cycles. Every week sees the new release of multiple products that meet the needs of jobseekers worldwide.",
    responsibility: [
      "Write software to fulfill well-specified, small-scoped work requests for your team's product(s), escalating more complex or ambiguous issues to senior engineers.",
      "Write software to fix simple bugs.",
      "Assist in investigating problems and recommending fixes for products within your team.",
      "Utilize knowledge of programming languages and the software ecosystem to accomplish goals.",
    ],
  },
  {
    position: "Python",
    department: "Development",
    location: "Goregaon",
    jobType: "Fresher",
    salary: "4,00,000-6,00,000",
    jobDesc:
      "If you are an engineer who's passionate about building impactful products that scale to tens of millions of page views a day, Indeed is looking for you. Indeed offers skilled developers like you a complex development ecosystem with short release cycles. Every week sees the new release of multiple products that meet the needs of jobseekers worldwide.",
    responsibility: [
      "Write software to fulfill well-specified, small-scoped work requests for your team's product(s), escalating more complex or ambiguous issues to senior engineers.",
      "Write software to fix simple bugs.",
      "Assist in investigating problems and recommending fixes for products within your team.",
      "Utilize knowledge of programming languages and the software ecosystem to accomplish goals.",
    ],
  },
  {
    position: "Full stack developer",
    department: "Development",
    location: "Mulund",
    jobType: "Jr.developer",
    salary: "7,00,000-9,00,000",
    jobDesc:
      "If you are an engineer who's passionate about building impactful products that scale to tens of millions of page views a day, Indeed is looking for you. Indeed offers skilled developers like you a complex development ecosystem with short release cycles. Every week sees the new release of multiple products that meet the needs of jobseekers worldwide.",
    responsibility: [
      "Write software to fulfill well-specified, small-scoped work requests for your team's product(s), escalating more complex or ambiguous issues to senior engineers.",
      "Write software to fix simple bugs.",
      "Assist in investigating problems and recommending fixes for products within your team.",
      "Utilize knowledge of programming languages and the software ecosystem to accomplish goals.",
    ],
  },
  {
    position: "Flutter developer",
    department: "Development",
    location: "New york",
    jobType: "Experience",
    salary: "4,00,000-9,00,000",
    jobDesc:
      "If you are an engineer who's passionate about building impactful products that scale to tens of millions of page views a day, Indeed is looking for you. Indeed offers skilled developers like you a complex development ecosystem with short release cycles. Every week sees the new release of multiple products that meet the needs of jobseekers worldwide.",
    responsibility: [
      "Write software to fulfill well-specified, small-scoped work requests for your team's product(s), escalating more complex or ambiguous issues to senior engineers.",
      "Write software to fix simple bugs.",
      "Assist in investigating problems and recommending fixes for products within your team.",
      "Utilize knowledge of programming languages and the software ecosystem to accomplish goals.",
    ],
  },
];
function SearchPage() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#00b074",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: "24px",
      [theme.breakpoints.up("md")]: {
        width: "50ch",
      },
    },
  }));
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
  const bgSearch = {
    backgroundColor: "#2c3a41",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    minHeight: "25vh",
    left: "0px",
  };
  return (
    <>
      <Box mt={5} style={bgSearch}>
        <ThemeProvider theme={theme}>
          <Container>
            <Grid
              bgcolor={"#fff"}
              sx={{
                borderRadius: "10px",
              }}
              p={3}
              justifyContent="center"
              alignItems="center"
              // spacing={3}
              // container
            >
              <Grid>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon fontSize="large" />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Type Job title, keywords"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                      position: "absolute",
                      right: "0",
                      padding: "16px 46px",
                    }}
                  >
                    Search
                  </Button>
                </Search>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </Box>
      <ThemeProvider theme={theme}>
        <Box bgcolor="#f2f2f2" sx={{ minHeight: "100vh" }}>
          <Container>
            <Grid container spacing={5} paddingBottom={"100px"} width="100%">
              {jobDetails.map((element) => {
                return (
                  <JobCard
                    position={element.position}
                    department={element.department}
                    location={element.location}
                    jobType={element.jobType}
                    salary={element.salary}
                    jobDesc={element.jobDesc}
                    responsibility={element.responsibility.map((e) => {
                      return <li>{e}</li>;
                    })}
                  />
                );
              })}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default SearchPage;
