import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { imgOne } from "../assets/getImage";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import PortfolioCard from "./ui/PortfolioCard";
import { portfolioData } from "../constant/data";

const Portfolio = () => {
  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" />
        <Title title="My Portfolio" />
      </div>
      <div className="grid grid-cols-3 gap-10 pt-10">
        {portfolioData.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
