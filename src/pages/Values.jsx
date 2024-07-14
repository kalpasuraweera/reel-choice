import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";

const Values = () => {
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
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Values
          </Typography>
          <Typography paragraph>
            Integrity: We conduct our business with honesty and hold ourselves
            to the highest ethical standards.
          </Typography>
          <Typography paragraph>
            Innovation: We are committed to continuous improvement and are
            passionate about developing new and improved ways to serve our
            customers.
          </Typography>
          <Typography paragraph>
            Excellence: We strive for excellence in everything we do and aim to
            deliver the highest quality products and services.
          </Typography>
          <Typography paragraph>
            Teamwork: We believe in the power of teamwork and collaboration to
            achieve common goals and overcome challenges.
          </Typography>
          <Typography paragraph>
            Customer Focus: We are dedicated to understanding and meeting the
            needs of our customers, ensuring their satisfaction is at the heart
            of our decisions.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Values;
