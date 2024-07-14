import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Home() {
  const imgRef = useRef(null);

  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (username) {
      localStorage.setItem("username", username);
      setOpen(false);
    }
  };

  useEffect(() => {
    const name = localStorage.getItem("username") || username;
    if (name) {
      const hours = new Date().getHours();
      if (hours < 12) {
        setGreeting("Good Morning");
      } else if (hours < 18) {
        setGreeting("Good Afternoon");
      } else if (hours < 22) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
      setUsername(name);
    } else {
      setOpen(true);
    }
  }, [username]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    imgRef.current.style.animation = "swipeRight 1s ease-out forwards";
  });

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Enter Your Name</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Grid
        container
        alignItems="center"
        sx={{
          paddingTop: "2rem",
          paddingBottom: "5rem",
          backgroundImage: "url(/home_bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              padding: { xs: 2, md: 4 },
            }}
          >
            <Typography variant="h3" color="#fff">
              <Typography
                variant="span"
                color="primary.main"
                sx={{ display: "block" }}
              >
                {greeting} {username},
              </Typography>
              Welcome to ReelChoice
            </Typography>
            <Typography variant="h5" color="#f2f2f2">
              Get personalized recommendations for movies and TV shows
            </Typography>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/home_img.png" alt="Home" ref={imgRef} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          This is how much time you spent on our website
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Box
              sx={{
                backgroundColor: "primary.main",
                padding: "1rem",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "150px",
              }}
            >
              <Typography variant="h4">Hours</Typography>
              <Typography variant="h4">
                {Math.floor(time / 3600) < 10 ? "0" : ""}
                {Math.floor(time / 3600)}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                backgroundColor: "primary.main",
                padding: "1rem",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Minutes</Typography>
              <Typography variant="h4">
                {Math.floor((time % 3600) / 60) < 10 ? "0" : ""}
                {Math.floor((time % 3600) / 60)}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                backgroundColor: "primary.main",
                padding: "1rem",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Seconds</Typography>
              <Typography variant="h4">
                {Math.floor(time % 60) < 10 ? "0" : ""}
                {Math.floor(time % 60)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          mt: 4,
          mb: 4,
          padding: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Popular Movies
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/51f4B2SLAyL._AC_UF894,1000_QL80_.jpg"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Batman Begins
                </Typography>
                <Typography variant="body2">
                  After witnessing the murder of his parents, Bruce Wayne trains
                  himself to fight against injustice, donning the persona of
                  Batman to protect Gotham.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/p7825626_p_v8_ae.jpg"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Inception
                </Typography>
                <Typography variant="body2">
                  A thief who enters the dreams of others to steal secrets from
                  their subconscious faces the heist of his lifetime, to plant
                  an idea into someone's mind.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/interstellar-movie-poster-design.jpg"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Interstellar
                </Typography>
                <Typography variant="body2">
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival by finding a new home.
                  But time is always matters.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
