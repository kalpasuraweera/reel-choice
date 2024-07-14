import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";

const History = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: "600px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Our History
          </Typography>
          <Typography variant="body2">
            Our company has been in the industry for over 10 years, providing
            top-notch services to our clients. We started as a small team with a
            big vision, and we have grown into a successful company with a
            strong reputation. Our expertise lies in creating innovative
            solutions that meet the unique needs of our clients. We are proud of
            our track record of delivering high-quality products and exceeding
            customer expectations. Our team is made up of talented individuals
            who are passionate about what they do and are dedicated to
            delivering exceptional results. We believe in fostering a
            collaborative and inclusive work environment where everyone's ideas
            are valued. Together, we strive to make a positive impact in the
            world through our work.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default History;
