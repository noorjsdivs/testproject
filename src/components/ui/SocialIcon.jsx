import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-5">
      <a href="#" className="portfolioIconStyle">
        <FaXTwitter />
      </a>
      <a href="#" className="portfolioIconStyle">
        <FaFacebook />
      </a>
      <a href="#" className="portfolioIconStyle">
        <FaGithub />
      </a>
      <a href="#" className="portfolioIconStyle">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcon;
