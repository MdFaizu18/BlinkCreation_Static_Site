"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  Palette,
  Video,
  Megaphone,
  GraduationCap,
  Globe,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    description:
      "Creating stunning websites tailored to your needs, including static, dynamic, and e-commerce solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Landing Page Re-creation",
    icon: <Code className="w-8 h-8" />,
    description:
      "Revamp your landing pages with a fresh, engaging design that converts visitors into loyal customers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: <Megaphone className="w-8 h-8" />,
    description:
      "From social media management to SEO, SEM, influencer marketing, and personal branding.",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Video Creation",
    icon: <Video className="w-8 h-8" />,
    description:
      "Enhance your brand with high-quality video edits, from reels and YouTube videos to promotional content.",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    title: "Graphic Design",
    icon: <Palette className="w-8 h-8" />,
    description:
      "We create impactful designs, including illustrations, brochures, posters, logos, and catalogs.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    title: "Student Services",
    icon: <GraduationCap className="w-8 h-8" />,
    description:
      "Empowering students with resume building, project creation, portfolio creation, and interview preparation.",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function ServiceArea() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="pb-24 mx-24 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Adds delay between each child animation
              },
            },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-in-out
                         bg-white text-black hover:bg-gradient-to-br ${service.color} hover:text-white`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              style={{
                transition: "background-color 4s ease",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-full ${
                    hoveredId === service.id
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {service.icon}
                </div>
                <span className="text-3xl font-bold opacity-50">
                  0{service.id}
                </span>
              </div>
              <h3
                className={`text-2xl font-semibold mb-3 ${
                  hoveredId === service.id ? "text-white" : "text-black"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-sm opacity-80 mb-4">{service.description}</p>
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: hoveredId === service.id ? 1 : 0,
                  scale: hoveredId === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
