import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { CssBaseline} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    justifyContent: "center",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
// const animate = {
//   animatedIcon:{
// height:"2px"
//   }
// }
// const styles = {
//   paperContainer: {
//     height: "100%",
//     top: "0",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     filter: "blur(1px)",
//     // backdropFilter: "blur(3px)",
//     // backgroundColor: "rgba(0,0,0,1)",
//     backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_960_720.jpg"})`,
//   },
// };

export default function SearchAppBar() {
  return (
    <>
      
        <CssBaseline />
        <Grid
          container
          // spacing={0}
          // direction="column"
          alignItems="center"
          justifyContent="center"
          my={8}
          // top={0}
          height="100%"
          style={{ minWidth: "100vh"}}
          
        >
          <Typography textAlign={"center"} fontWeight="700" fontSize={"24px"}  sx={{ color: 'info.main' }} display='flex' alignItems='center' height={"85px"} flexWrap='wrap'>
            search Your job here <ArrowForwardIcon fontSize="large"  display='flex' alignItems='center' flexWrap='wrap'/>
          </Typography>
          <Search sx={{ border: 1 , borderColor: 'primary.main' }}>
            <SearchIconWrapper>
              <SearchIcon color='primary'  />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
      {/* <hr  color="#90caf9"/> */}
    </>
  );
}
