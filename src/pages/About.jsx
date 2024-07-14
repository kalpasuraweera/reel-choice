import React from "react";
import NavBar from "../components/NavBar";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function About() {
  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/8-xmen-movie-poster-design.jpg"
                alt="Company History"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Our History
                </Typography>
                <Typography variant="body2">
                  Our company has been in the industry for over 10 years,
                  providing top-notch services to our clients. We started as a
                  small team with a big vision, and we have grown into a
                  successful company with a strong reputation. Our expertise
                  lies in creating innovative solutions that meet the unique
                  needs of our clients. We are proud of our track record of
                  delivering high-quality products and exceeding customer
                  expectations. Our team is made up of talented individuals who
                  are passionate about what they do and are dedicated to
                  delivering exceptional results. We believe in fostering a
                  collaborative and inclusive work environment where everyone's
                  ideas are valued. Together, we strive to make a positive
                  impact in the world through our work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography>
              At ReelChoice, we are committed to innovation, quality, and our
              community. Our mission is to deliver exceptional experiences
              through our products, driven by the pursuit of excellence and a
              deep understanding of our users' needs. We believe in the power of
              teamwork, integrity, and continuous learning to achieve our goals
              and make a positive impact in the world.
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
                      Kalpa is our Creative Director, with an eye for design
                      that transforms ideas into visual stories. Her innovative
                      approach and dedication to brand identity have elevated
                      our marketing materials and product designs. Mia's
                      leadership in the creative department has inspired a
                      culture of creativity and excellence. When not at work,
                      she enjoys photography and traveling.
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
                      leadership and organizational skills. She ensures projects
                      stay on track, meet deadlines, and exceed expectations.
                      Aria's ability to navigate complex projects and foster
                      collaboration among team members has been crucial to our
                      success. Outside of work, she is an avid reader and enjoys
                      hiking.
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
                      Leo is a Senior Backend Developer with a knack for
                      creating scalable and efficient server-side applications.
                      His expertise in various backend technologies has been
                      instrumental in building robust architectures for our
                      products. Leo is passionate about coding and often
                      contributes to open-source projects. In his leisure time,
                      he enjoys cycling and playing the guitar.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
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
              Excellence: We strive for excellence in everything we do and aim
              to deliver the highest quality products and services.
            </Typography>
            <Typography paragraph>
              Teamwork: We believe in the power of teamwork and collaboration to
              achieve common goals and overcome challenges.
            </Typography>
            <Typography paragraph>
              Customer Focus: We are dedicated to understanding and meeting the
              needs of our customers, ensuring their satisfaction is at the
              heart of our decisions.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;
