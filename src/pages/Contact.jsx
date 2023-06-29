import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

export default function Contact() {

const validateEmail = (str) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
};

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.id;
  const inputValue = target.value;

  if (inputType === "name") {
    setName(inputValue);
  } else if (inputType === "email") {
    setEmail(inputValue);
  } else if (inputType === "message") {
    setMessage(inputValue);
  } else {
    setErrorMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (!validateEmail(email) || !email) {
    setErrorMessage("Email is invalid");
    return;
  }
  if (!name) {
    setErrorMessage(
      `Name is required`
    );
    return;
  }
  if (!message) {
    setErrorMessage(`Message is required`);
    return;
  }
  setName("");
  setEmail("");
  setMessage("");
};

  return (
    <Box
      sx={{
        maxWidth: "640px",
        p: 2,
      }}
    >
      <form>
        <Stack spacing={3} alignItems="flex-end">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
          />

          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />

          <Button type="submit" onClick={handleFormSubmit} variant="contained">
            Send
          </Button>
        </Stack>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Box>
  );
}
