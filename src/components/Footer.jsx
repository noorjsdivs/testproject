import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-primaryColor">
      <Container className="flex items-center text-lightText justify-between py-5">
        <img src={logo} alt="logo" className="w-24" />
        <p className="text-sm lowercase hover:text-white duration-300 ">
          All rights reserved @me
        </p>
        <SocialIcon />
      </Container>
    </div>
  );
};

export default Footer;
