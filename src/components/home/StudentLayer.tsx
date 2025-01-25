"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import StdImg from "../../assests/student.jpg";
import { Link } from "react-router-dom";

export default function StudentLayer() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.2 }, // Trigger when 20% of the section is visible
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  return (
    <div ref={sectionRef} className="relative bg-[#F4F3EE] overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16"
      >
        <div className="flex  justify-between align-items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <span className="inline-block px-4 py-2 mb-8 rounded-full text-sm font-medium bg-black text-white">
              - CAREER KICKSTART -
            </span> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-black leading-tight mb-8">
              Empowering Students for Success
            </h1>
            <p className="text-gray-800 text-lg mb-12 max-w-3xl">
              Your one-stop hub for academic and career excellence. From
              creating impressive resumes and crafting standout projects to
              comprehensive documentation, polished portfolios, and interview
              preparation — we’ve got you covered at every step of your journey.
            </p>
            <Link className="theme-btn" to="/student-hub">
              Get Started Today
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[35%]"
          >
            <img
              src={StdImg}
              alt="Business professional"
              className="w-[100%] h-[500px] object-cover object-center "
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
