import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

const PersonContact = () => {
  const { name } = useParams();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          Contact {name}
        </Typography>
        <Typography variant="body1" component="p" style={{ marginTop: "20px" }}>
          Email: {name.toLowerCase()}@example.com
        </Typography>
        <Typography variant="body1" component="p">
          Phone: +94 77 1234567
        </Typography>
        <Typography variant="body1" component="p">
          Address: {name} Street, Colombo
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonContact;
