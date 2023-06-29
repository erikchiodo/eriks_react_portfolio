import React from "react";

import { Stack, Typography } from "@mui/material";

export default function Resume() {
  return (
    <Stack spacing={2}>
      <Typography variant="body1">
        Download my <a href="./Resume.pdf">Resume</a> 
        {/* Add listener to Resume, to hit express endpoint*/}
      </Typography>

      <Stack spacing={0}>
        <Typography variant="body1">Front-end Proficiencies</Typography>

        <div variant="body2">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>BootStrap</li>
          </ul>
        </div>
      </Stack>

      <Stack spacing={0}>
        <Typography variant="body1">Back-end Proficiencies</Typography>
        <div variant="body2">
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </Stack>
    </Stack>
  );
}
