import React from "react";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(135deg, rgba(89,89,89,1) 7%,rgba(89,89,89,1) 7%,rgba(89,89,89,1) 10%,rgba(0,0,0,1) 20%,rgba(89,89,89,1) 21%,rgba(0,0,0,1) 24%,rgba(102,102,102,1) 24%,rgba(28,28,28,1) 24%,rgba(28,28,28,1) 24%,rgba(102,102,102,1) 24%,rgba(0,0,0,1) 24%,rgba(19,19,19,1) 33%,rgba(19,19,19,1) 33%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(17,17,17,1) 72%,rgba(89,89,89,1) 76%,rgba(89,89,89,1) 76%,rgba(43,43,43,1) 85%)",
      }}
      className="fixed flex flex-col justify-center items-center min-h-screen py-8 px-4"
    >
      <AboutContent/>
    </div>
  );
};

export default About;
