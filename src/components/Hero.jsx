import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "./ui/Button";

const Hero = () => {
  const words = [
    "Mern stack developer",
    "Frontend developer",
    "Backend developer",
    "Full stack developer",
  ];

  return (
    <div className="w-full bg-hero-image bg-cover">
      <Container className="py-20">
        <div className="w-1/2 flex flex-col gap-y-5">
          <p className="text-base uppercase text-lightText">
            CONSULTANT EYE SERGEON
          </p>
          <h2 className="text-7xl font-bold text-white">
            Hi, I’m <span className="text-designColor">William Lina</span>
          </h2>
          <h2 className="text-4xl font-bold text-white">
            a{" "}
            <Typewriter
              words={words}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-base text-lightText pr-32 font-medium">
            Explore the professional journey, expertise, and achievements of a
            dedicated medical practitioner. Discover education, experience,
            clinical skills, research, and patient care .
          </p>
          <Button className="w-40 h-14" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
