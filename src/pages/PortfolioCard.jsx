import { BsGithub } from "react-icons/bs";
import { Box, Stack, Typography } from "@mui/material";
import "../style.css";

export default function PortfolioCard({
  title,
  description,
  gitHubLink,
  deployedApp,
  image,
}) {
  return (
    <Box
      sx={{
        boxShadow: 1,
        p: 2,
      }}
    >
      <Stack spacing={1}>
        <a href={deployedApp} target="_blank" rel="noreferrer">
          <img className="portfolio-image" src={image} alt={title} />
        </a>

        <Stack spacing={0}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub fontSize={40} />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
}
