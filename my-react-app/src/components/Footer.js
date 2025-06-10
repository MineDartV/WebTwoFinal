import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/santacruzbicycles/?hl=en">
          <InstagramIcon />
        </a>
        <a href="https://x.com/santacruzbikes?lang=en">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/santacruzbicycles/">
          <FacebookIcon />
        </a>
        <a href="https://www.youtube.com/channel/UC-ZdOy00pTvliH3FtW_a_8g">
          <YouTubeIcon />
        </a>
      </div>
      <p> &copy; 2025 SantaCruzBicicyles.com</p>
    </div>
  )
}

export default Footer
