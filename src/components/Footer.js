import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © {new Date().getFullYear()} ReelChoice. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="/about">
            About Us
          </Link>
          {" | "}
          <Link color="inherit" href="/contact">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
