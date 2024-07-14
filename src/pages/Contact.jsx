import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  LocationCity,
  Pages,
  Phone,
  WebStories,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (email) {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setEmailError("Invalid email");
      } else {
        setEmailError("");
      }
    }
  }, [email]);

  const handleSubmit = () => {
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (!message) {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Grid container padding={2} spacing={2}>
        <Grid item md={6} xs={12} padding={2}>
          <Typography variant="h3">Contact Us</Typography>
          <Typography variant="h5">
            Not sure where to start? Contact us and we'll help you get started.
          </Typography>
          <Box marginTop={5}>
            <Box display="flex" alignItems="center" gap={1}>
              <Email />
              <Typography variant="body1">info@reelchoice.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone />
              <Typography variant="body1">+94 771234589</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationCity />
              <Typography variant="body1">Horangala, Uda Karawita</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError}
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError}
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError}
            margin="normal"
          />
          {submitted && (
            <Typography variant="body1" color="success">
              Message submitted successfully
            </Typography>
          )}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={handleSubmit} variant="contained" color="primary">
              send
            </Button>
          </Stack>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center">
              Service Agents
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="John Doe" />
                <Button variant="contained" component={Link} to="/contact/john">
                  View
                </Button>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Will Smith" />
                <Button variant="contained" component={Link} to="/contact/will">
                  View
                </Button>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Mia Johnson" />
                <Button variant="contained" component={Link} to="/contact/mia">
                  View
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
