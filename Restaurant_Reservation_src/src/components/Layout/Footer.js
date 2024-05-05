import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{  bgcolor: "darkslategrey", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            textAlign: "right",
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "white",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
          >
          <Typography sx={{textAlign: "left",
        fontSize:"20px" }}>
             <Typography variant="h5" color="inherit" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="inherit">
              123 Main Street, Coimbatore, India
            </Typography>
            <Typography variant="body2" color="inherit">
              Email: dineplan@gmail.com
            </Typography>
            <Typography variant="body2" color="inherit">
              Phone: +91 9876543210
            </Typography>

          </Typography>
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        
      </Box>
    </>
  );
};

export default Footer;
