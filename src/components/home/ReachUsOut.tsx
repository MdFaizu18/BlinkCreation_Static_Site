"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Logo from "../../assests/logo/logo-black.png";

export default function ReachUsOut() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href ? href.substring(1) : "";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        className="container mx-auto px-6 md:px-12 lg:px-24 py-10"
      >
        <div className="flex flex-row-reverse justify-between align-items-center">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-black leading-tight mb-8">
              Power Up Your Business With Us
            </h1>
            <p className="text-gray-800 text-lg mb-12 max-w-3xl">
              Unlock the potential of your brand with innovative solutions
              tailored to your needs. Whether it’s building dynamic websites,
              enhancing your digital presence, or creating standout visuals,
              we’re here to bring your ideas to life.
            </p>
            <a
              className="theme-btn"
              href="#contact"
              onClick={handleSmoothScroll}
            >
              Contact Us
            </a>
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
              src={Logo}
              alt="Business professional"
              className="w-[100%] h-full object-cover object-center "
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
