import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

const BlueOnTooltip = withStyles({
  tooltip: {
    // color: "lightblue",
    backgroundColor: "#347edd",
  },
})(Tooltip);
export default function JobsCard() {
  return (
    <>
      <Typography
        variant="h3"
        component={"div"}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        flexWrap="wrap"
        sx={{ color: "info.main" }}
        height={"65px"}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        Job feed
      </Typography>

      <Grid
        container
        mt={5}
        spacing={3}
        direction="row"
        // alignItems="center"
        justifyContent="center"
        top={0}
        // height="69vh"
      >
        <BlueOnTooltip title="Click to apply" arrow  placement="top">
          <Grid item>
            <Card sx={{ maxWidth: 345, top: 0 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Web developer
                  </Typography>  
                  <Typography variant="body2" color="text.secondary">
                    Tata consultancy service
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Provident labore unde voluptates sapiente incidunt tenetur
                      perspiciatis libero officia quis, aliquid accusamus. Et
                      eos voluptates obcaecati culpa? Libero sit similique
                      assumenda?
                    </p>
                    <p>job type: Lorem, ipsum.</p>
                    <p>
                      salary
                      <li>15000-20000/month</li>
                    </p>
                    <p>
                      schedule
                      <li>monday to friday</li>
                    </p>
                    <p>
                      work remotely:
                      <li>No</li>
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </BlueOnTooltip>
      </Grid>
    </>
  );
}
