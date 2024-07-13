import React from "react";
import NavBar from "../components/NavBar";
import { Box, Button } from "@mui/material";

function Home() {
  return (
    <>
      <NavBar />
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </>
  );
}

export default Home;
