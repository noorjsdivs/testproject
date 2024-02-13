import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { featuresData } from "../constant/data";
import FeatureCard from "./FeatureCard";

const Features = () => {
  // const featuresData = [
  //   {
  //     id: 1,
  //     icon: <AiOutlineMenu />,
  //     title: "Business Stratagy",
  //     descripton:
  //       "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  //   },
  //   {
  //     id: 2,
  //     icon: <IoBookOutline />,
  //     title: "App Development",
  //     descripton:
  //       " We’ll handle everything from to app development process until it is time to make your project live. ",
  //   },
  //   {
  //     id: 3,
  //     icon: <IoMdArrowRoundForward />,
  //     title: "Business Stratagy",
  //     descripton:
  //       "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  //   },
  //   {
  //     id: 4,
  //     icon: <IoMdArrowRoundForward />,
  //     title: "Business Stratagy",
  //     descripton:
  //       "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  //   },
  //   {
  //     id: 5,
  //     icon: <IoMdArrowRoundForward />,
  //     title: "Business Stratagy",
  //     descripton:
  //       "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  //   },
  //   {
  //     id: 6,
  //     icon: <IoMdArrowRoundForward />,
  //     title: "Business Stratagy",
  //     descripton:
  //       "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  //   },
  // ];
  return (
    <Container className="border-b border-black flex flex-col gap-7">
      <Subtitle title="Features" />
      <Title title="What I Do" />
      <div className="grid grid-cols-3 gap-x-5 gap-y-7">
        {featuresData.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Features;
