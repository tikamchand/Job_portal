import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardContent, TextField, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from "@mui/icons-material/School";
import { InputAdornment } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useForm } from "react-hook-form";
import LinkIcon from "@mui/icons-material/Link";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  "Personal Details",
  "Educational Details",
  "Project Details",
  "Experience Details",
  "Extra Details",
];
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

export default function Resume() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { register, handleSubmit } = useForm();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const PersonsDetails = () => {
    return (
      <>
        <CardContent>
          <div className={styles.margin}>
            <Grid
              mt={4}
              container
              spacing={2}
              alignItems="center"
              textAlign={"center"}
            >
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="firstName"
                  label="First Name"
                  style={{ width: "80%" }}
                  required
                  // {...register("firstName", { required: true })}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Last Name"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="lastName"
                  required
                  {...register("lastName")}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  name="email"
                  required
                  {...register("email")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Phone Number"
                  variant="outlined"
                  type={"number"}
                  name="phone"
                  {...register("phone")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Your Website"
                  variant="outlined"
                  name="website"
                  {...register("website")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="GitHub"
                  variant="outlined"
                  name="github"
                  {...register("github")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GitHubIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Linked In"
                  variant="outlined"
                  name="linkedin"
                  {...register("linkedin")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkedInIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Twitter"
                  variant="outlined"
                  name="twitter"
                  {...register("twitter")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Facebook"
                  variant="outlined"
                  name="facebook"
                  {...register("facebook")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FacebookIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Instagram"
                  variant="outlined"
                  name="instagram"
                  {...register("instagram")}
                  style={{ alignItems: "left", width: "80%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <InstagramIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </>
    );
  };
  const EducationalDetails = () => {
    return (
      <>
        <Grid
          container
          spacing={2}
          mt={4}
          alignItems="center"
          textAlign={"center"}
          lg={12}
        >
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="collegeField"
              label="college/university"
              name="college"
              {...register("college")}
              variant="outlined"
              style={{ width: "80%" }}
              margin="dense"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              id="dateField"
              variant="outlined"
              style={{ width: "80%" }}
              name="date"
              {...register("date")}
              margin="normal"
              type="date"
            ></TextField>
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="collegeQField"
              label="Qualification"
              variant="outlined"
              style={{ width: "80%" }}
              name="qualification"
              {...register("qualification")}
              margin="dense"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={8} sm={12} xs={12} lg={8}>
            <TextField
              id="collegeDesField"
              label="Description"
              name="college"
              {...register("college")}
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container spacing={2} alignItems="center" textAlign={"center"}>
          <Grid item md={8} sm={12} xs={12} lg={4}>
            <TextField
              id="schoolField"
              label="school Name"
              name="schoolName"
              {...register("schoolName")}
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              id="dateField"
              variant="outlined"
              style={{ width: "80%" }}
              name="schoolDate"
              {...register("schoolDate")}
              margin="normal"
              type="date"
            ></TextField>
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="schoolQField"
              label="Qualification"
              name="schoolQualification"
              {...register("schoolQualification")}
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={8} sm={8} xs={8} lg={8}>
            <TextField
              id="descriptionField"
              label="Description"
              name="schoolDes"
              {...register("schoolDes")}
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
        </Grid>
      </>
    );
  };
  const ProjectDetails = () => {
    return (
      <>
        <Grid
          container
          spacing={2}
          alignItems="center"
          mt={4}
          lg={12}
          textAlign={"center"}
        >
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              id="titleField"
              label="Project Title"
              variant="outlined"
              style={{ width: "80%" }}
              name="projectT"
              {...register("projectT")}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={12}>
            <TextField
              id="linkField"
              label="Project Link"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              name="projectL"
              {...register("projectL")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              id="descriptionField"
              label=" Project Description"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              name="projectD"
              {...register("projectD")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} mt={2}>
          <Button variant="contained">Add</Button>
        </Grid>
      </>
    );
  };
  const ExperienceDetails = () => {
    return (
      <>
        <Grid container spacing={2} mt={4} alignItems="center">
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="organizationField"
              label=" Organization/Institute"
              variant="outlined"
              name="organizationName"
              {...register("organizationName")}
              style={{ width: "80%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              id="positionField"
              label="Position"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              name="position1"
              {...register("position1")}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              id="durationField"
              label="Duration"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              name="duration1"
              {...register("duration1")}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              id="descriptionField"
              label="Description"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              name="description1"
              {...register("description1")}
            />
          </Grid>
        </Grid>
      </>
    );
  };
  const ExtraDetails = () => {
    return (
      <>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={4}>
            <h4>
              <CheckCircleIcon
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                />
              <span>Skills/Languages</span>
            </h4>
          </Grid>
          <Grid item xs={0} lg={8} />
          <br />
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="skill1Field"
              label="skill1"
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="skill2Field"
              label="skill2"
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="skill3Field"
              label="skill3"
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              id="skill4Field"
              label="skill4"
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              id="skill4Field"
              label="skill5"
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              id="skill4Field"
              label="skill4"
              variant="outlined"
              style={{ width: "90%" }}
              margin="normal"
            />
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2} alignItems="flex-start" lg={12}>
            <Grid
              item
              xs={12}
              lg={4}
              alignItems="flex-end"
              alignContent="flex-end"
            >
              <h4>
                <CheckCircleIcon
                  display="flex"
                  alignItems="center"
                  flexWrap="wrap"
                />
                <span className="pl-3">Interest</span>
              </h4>
            </Grid>
            <Grid item xs={0} lg={8} />
            <br />
            <Grid item md={12} sm={12} xs={12} lg={4}>
              <TextField
                id="Interest1Field"
                label="Interest1"
                variant="outlined"
                style={{ width: "90%" }}
                margin="normal"
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={4}>
              <TextField
                id="Interest2Field"
                label="Interest2"
                variant="outlined"
                style={{ width: "90%" }}
                margin="normal"
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={4}>
              <TextField
                id="Interest3Field"
                label="Interest3"
                variant="outlined"
                style={{ width: "90%" }}
                margin="normal"
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={4}>
              <TextField
                id="Interest4Field"
                label="Interest4"
                variant="outlined"
                style={{ width: "90%" }}
                margin="normal"
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={4}>
              <TextField
                id="Interest4Field"
                label="Interest5"
                variant="outlined"
                style={{ width: "90%" }}
                margin="normal"
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={4}>
              <TextField
                id="Interest4Field"
                label="Interest6"
                variant="outlined"
                style={{ width: "90%" }}
                margin="normal"
                InputProps={{
                  endAdornment: <InputAdornment position="start" />,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };
  function getForm() {
    switch (activeStep) {
      case 0:
        return <PersonsDetails />;
        break;
      case 1:
        return <EducationalDetails />;
      // break;
      case 2:
        return <ProjectDetails />;
      case 3:
        return <ExperienceDetails />;
      case 4:
        return <ExtraDetails />;
      default:
        return "nothing to show";
      // break;
    }
  }
  return (
    <Box sx={{ width: "90%", margin: " 40px auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleSave}>Save</Button>
          </Box> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <form action="/" noValidate autoComplete="off">
            {getForm()}
          </form>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              size="large"
              variant="outlined"
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext} size="large" variant="outlined">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
