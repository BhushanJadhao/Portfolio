import aboutus from "../assets/aboutus.png";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h1 className="my-20 text-center text-4xl text-white">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={aboutus}
              alt="About Us"
              className="rounded-2xl w-3/4 max-w-sm"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
          <p className="text-white">
            Hello! I'm Bhushan Rajendra Jadhao, a BE student at Sinhgad
            Institute of Technology and Science, pursuing a degree in Computer
            Science. My passion lies in web development, where I enjoy creating
            innovative projects such as a Pinterest clone, live location tracker,
            and a dynamic to-do list application with backend integration. In
            addition to web development, I have a strong interest in data
            structures and algorithms, which I regularly explore through various
            problem-solving challenges. I'm driven by the opportunity to build
            seamless user experiences and tackle complex technical problems. Feel
            free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/bhushan-jadhao-5b2606254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              LinkedIn
            </a>{" "}
            or check out my{" "}
            <a
              href="https://github.com/BhushanJadhao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              GitHub
            </a>{" "}
            to see what I'm working on.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
