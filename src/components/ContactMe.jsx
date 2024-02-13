import React, { useState } from "react";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import Container from "./Container";
import { contact1 } from "../assets/getImage";

import SocialIcon from "./ui/SocialIcon";

const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
  const handleSubmit = () => {
    console.log(userName, phone, email, subject, messages);
    setUserName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessages("");
  };
  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="Contact" />
        <Title title="Contact With Me" />
      </div>
      <div className="flex gap-10 pt-10">
        <div className="w-1/3 bg-stone-950/50 p-10 rounded-lg group">
          <div className="overflow-hidden rounded-lg">
            <img
              src={contact1}
              alt="contact image"
              className="rounded-md group-hover:scale-110 duration-500"
            />
          </div>
          <div className="py-5 flex flex-col gap-2">
            <p className="text-2xl text-white font-bold">Nevine Acotanza</p>
            <p className="text-lg font-medium">Chief Operating Officer</p>
            <p className="text-base font-medium">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <p className="text-base">
              phone: <span className="text-white">+88010000000000</span>
            </p>
            <p className="text-base">
              Email: <span className="text-white">mern@people&tech.com</span>
            </p>
            <p className="uppercase">Find with me</p>
          </div>
          <SocialIcon />
        </div>
        <div className="w-2/3 bg-stone-950/50 p-10 rounded-lg flex flex-col gap-10">
          <div className="flex justify-between gap-7">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Your name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="inputStyle"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Phone Number</p>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="inputStyle"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Email</p>
            <input
              type="email"
              placeholder="Enter your Email"
              className="inputStyle"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Subject</p>
            <input
              type="text"
              placeholder="Define a subject"
              className="inputStyle"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Your Message</p>
            <textarea
              type="text"
              placeholder="Enter your messages..."
              className="inputStyle"
              cols={1}
              rows={3}
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColor duration-300 uppercase hover:text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
