import React from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Resume from "../job/Resume";
function JobCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  function applyForm() {
    return <Resume />;
  }
  let {
    position,
    department,
    location,
    jobType,
    salary,
    jobDesc,
    responsibility,
  } = props;
  return (
    <>
      <Grid sx={{ width: "100%", borderRadius:"50px"}} mt={5} >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ padding: "40px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography sx={{ width: "40%",flexShrink: 1 }} variant="h5">
                {position}
              </Typography>
              <Box>
                <Typography sx={{ color: "text.secondary" }}>
                  Department
                </Typography>
                <Typography variant="subtitle2">{department} </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "text.secondary" }}>
                  Location
                </Typography>
                <Typography variant="subtitle2">{location}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "25%",
              }}
            >
              <Button variant="contained" color="secondary" onClick={applyForm}>
                Apply
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "40px", width: "100%" }}>
            <Typography variant="h6" mb={2}>
              Job Description
            </Typography>
            <Box sx={{ marginBottom: "16px" }}>
              <Typography variant="body1" fontWeight="bold">
                Job Type
              </Typography>
              <Typography variant="subtitle2">{jobType}</Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Salary Range
              </Typography>
              <Typography variant="subtitle2">{salary} LPA</Typography>
            </Box>
            <Box mt={2} mb={2} width="80%">
              <Typography variant="body1" fontWeight="bold">
                Your Job
              </Typography>
              <Typography variant="subtitle2">{jobDesc}</Typography>
              <Typography variant="body2" fontWeight="bold" mt={1}>
                Responsibility
              </Typography>
              <ul>
                {responsibility}
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
}

export default JobCard;
