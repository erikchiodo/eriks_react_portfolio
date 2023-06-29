import React from "react";
import "../style.css";

import { Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <div>
      <Stack spacing={1}>
        <img
          className="selfImage"
          src={require("../assets/Self_Image.png")}
          alt="Self"
        />
        <Typography variant="body1">Hi! My name is Erik Chiodo.</Typography>
        <Typography variant="body1">
          I work as Product Owner at JP Morgan for Embedded Banking (EB), which is an emerging industry that looks to extend banking services to tech partners who want to offer financial services to small & medium sized business through their platforms. I manage a team called Coda who is responsible for reference data management, CRM Integrations, and User Authentication.
        </Typography>

        <Typography variant="body1">
          I'm currently enrolled in Columbia's Full-Stack Bootcamp where I've
          learned to HTML, CSS, & Javascript. I also have experience with
          Node.js, Express.js, and React. After I complete this course, I'm
          looking to build on my newly-acquired technical abilities by learning
          Java.
        </Typography>
      </Stack>
    </div>
  );
}
