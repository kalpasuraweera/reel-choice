import React from "react";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const Team = () => {
  return (
    <Grid item xs={12} padding={5}>
      <Typography variant="h4" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/18cd6927897313.5636ec83929d7.jpg"
              alt="Team Member Name"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kalpa Suraweera
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kalpa is our Creative Director, with an eye for design that
                transforms ideas into visual stories. Her innovative approach
                and dedication to brand identity have elevated our marketing
                materials and product designs. Mia's leadership in the creative
                department has inspired a culture of creativity and excellence.
                When not at work, she enjoys photography and traveling.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/5d50ca27897313.5636cb9a60d1f.jpg"
              alt="Aria Smith"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aria Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aria is our Project Manager, known for her exceptional
                leadership and organizational skills. She ensures projects stay
                on track, meet deadlines, and exceed expectations. Aria's
                ability to navigate complex projects and foster collaboration
                among team members has been crucial to our success. Outside of
                work, she is an avid reader and enjoys hiking.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/3ae97a27897313.5636c66a2da35.jpg"
              alt="Leo Torres"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Leo Torres
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Leo is a Senior Backend Developer with a knack for creating
                scalable and efficient server-side applications. His expertise
                in various backend technologies has been instrumental in
                building robust architectures for our products. Leo is
                passionate about coding and often contributes to open-source
                projects. In his leisure time, he enjoys cycling and playing the
                guitar.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
