/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
// import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

import Grid from "@mui/material/Grid";

function Subscribe() {
  return (
    <MKBox
      component="section"
      py={2}
      //   borderRadius="lg"
      //   shadow="lg"
      //   color="white"
      //   bgColor="light"
      //   p={2}
    >
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" color="dark" gutterBottom>
            Subscribe to our Newsletter
          </MKTypography>
          <MKTypography variant="body2" color="dark" opacity={0.8} pb={2}>
            Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={6}>
            <MKInput
              type="email"
              variant="outlined"
              label="Email Address"
              value="someone@example.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={2}>
            <MKButton type="submit" variant="gradient" color="info" fullWidth>
              Subscribe
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Subscribe;
