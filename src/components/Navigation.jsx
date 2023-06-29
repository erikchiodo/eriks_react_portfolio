import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import "./style.css";

export default function Navigation({ title, handlePageChange }) {
  return (
    <Stack>
      <Box
        sx={{
          backgroundColor: "#ececec",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" className="header">
          Erik Chiodo's Site
        </Typography>
        <Stack direction="row" spacing={3}>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={title === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>

          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={title === "Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={title === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>

          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={title === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </Stack>
      </Box>

      <Box
        sx={{
          boxShadow: 1,
          p: 2,
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Stack>
  );
}
