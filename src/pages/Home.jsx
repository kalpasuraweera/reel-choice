import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import {
  Box,
  Button,
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
      <NavBar />
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
                color="#ADD8E6"
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Typography variant="h4">
          This is how much time you spent in our website
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Typography variant="h5">
            {Math.floor(time / 3600) < 10 ? "0" : ""}
            {Math.floor(time / 3600)}:
          </Typography>
          <Typography variant="h5">
            {Math.floor(time / 60) < 10 ? "0" : ""}
            {Math.floor(time / 60)}:
          </Typography>
          <Typography variant="h5">
            {time % 60 < 10 ? "0" : ""}
            {time % 60}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
